import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import moment from "moment";
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../config/ormconfig';
import { User } from '../entities/user.entity';
import AppError from '../middleware/errorHandler';
import { Token } from '../entities/token.entity';
import crypto from 'crypto'
import { sendEmail } from '../utils/email';

const JWT_SECRET = process.env.JWT_SECRET || 'secret'
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173'

const userRepository = AppDataSource.getRepository(User);
const tokenRepository = AppDataSource.getRepository(Token);

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, phone, password } = req.body;

    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
      return next(new AppError('Email already in use', 400));
    }

    const newUser = userRepository.create({ name, email, phone, password });
    await userRepository.save(newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, remember } = req.body;

    const user = await userRepository.findOne({ where: { email } });
    if (!user) {
      return next(new AppError('Invalid credentials', 400));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new AppError('Invalid credentials', 400));
    }

    const tokens = await generateAuthTokens(user, remember);

    res.json(tokens);
  } catch (error) {
    next(error);
  }
};

export const generateAuthTokens = async (user: User, remember: boolean) => {
  const accessToken = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: '0.5h',
  });
  let refreshToken;
  if (remember) {
    refreshToken = jwt.sign({ id: user.id, email: user.email, remember: true }, JWT_SECRET, {
      expiresIn: '7d',
    });
  } else {
    refreshToken = jwt.sign({ id: user.id, email: user.email, remember: false }, JWT_SECRET, {
      expiresIn: '2h',
    });
  }

  const expiredAt = moment().add(remember ? 7 : 2, remember ? "day" : "hour").toDate();

  await tokenRepository.delete({
    user: { id: user.id },
    type: 'refresh-token'
  });

  await tokenRepository.save({
    token: refreshToken,
    type: 'refresh-token',
    expiredAt
  });

  return {
    accessToken,
    refreshToken,
  };
};

export const getMe = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id;

    const user = await userRepository.findOne({
      where: { id: userId },
      select: ['id', 'name', 'email', 'phone', 'avatar', 'created_at', 'updated_at'],
    });

    if (!user) {
      return next(new AppError('User not found', 404));
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};


export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id;

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      return next(new AppError('User not found', 404));
    }

    await tokenRepository.delete({
      user: { id: user.id },
      type: 'refresh-token'
    });

    res.json({ message: 'User logged out successfully' });
  } catch (error) {
    next(error);
  }
};

export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.body;

    if (!token) {
      return next(new AppError('Refresh token is required', 400));
    }

    const tokenEntry = await tokenRepository.findOne({ where: { token, type: 'refresh-token' } });
    if (!tokenEntry) {
      return next(new AppError('Invalid refresh token', 400));
    }

    jwt.verify(token, JWT_SECRET, async (err: any, decoded: any) => {
      if (err) return next(new AppError('Invalid refresh token', 400));

      const user = await userRepository.findOne({ where: { id: decoded.id } });
      if (!user) return next(new AppError('User not found', 400));

      const tokens = await generateAuthTokens(user, decoded.remember);
      res.json(tokens);
    });
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;

    const user = await userRepository.findOne({ where: { email } });
    if (!user) {
      return next(new AppError('User with this email does not exist', 404));
    }

    // Generate a secure token
    const resetToken = crypto.randomBytes(32).toString('hex');

    const expiredAt = moment().add(15, "minutes").toDate();

    const passwordResetEntry = tokenRepository.create({
      token: resetToken,
      type: 'reset-password',
      user,
      expiredAt,
    });

    await tokenRepository.save(passwordResetEntry);

    // Generate Reset Link
    const resetLink = `${FRONTEND_URL}/auth/reset-password?token=${resetToken}`;

    // Send Reset Email using SendGrid
    const emailContent = `
      <h2>Password Reset Request</h2>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>This link will expire in 15 minutes.</p>
    `;

    await sendEmail(user.email, 'Password Reset Request', emailContent);

    res.json({ message: 'Password reset link has been sent to your email' });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token, password } = req.body;

    const tokenItem = await tokenRepository.findOne({
      where: { token },
      relations: ['user']
    })

    if (!tokenItem || token.expiredAt < new Date()) {
      return next(new AppError('Invalid or expired reset token', 400));
    }
    const user = await userRepository.findOne({
      where: { id: tokenItem.user.id }
    })

    if (!user) {
      return next(new AppError('Invalid or expired reset token', 400));
    }

    user.password = await bcrypt.hash(password, 10)
    await userRepository.save(user);

    res.json({ message: 'Password reset successfully' });
  } catch (error) {
    next(error);
  }
};
