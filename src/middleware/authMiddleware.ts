import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import AppError from './errorHandler';


export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return next(new AppError('Access denied, no token provided', 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: number };

    (req as any).user = decoded; // Attach user object to `req`
    next();
  } catch (error) {
    next(new AppError('Invalid or expired token', 401));
  }
};
