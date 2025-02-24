import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../config/ormconfig';
import { Comment } from '../entities/comment.entity';
import { FindOptionsWhere } from 'typeorm';
import AppError from '../middleware/errorHandler';

const commentRepository = AppDataSource.getRepository(Comment);

export const getComments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = (req as any).user;
    const type = req.query.type as string;
    const reference_id = req.query.reference_id as string;
    let conditions: FindOptionsWhere<Comment> = {
      owner: {
        id: user.id
      }
    }

    if (type) {
      conditions = {
        ...conditions,
        type: type,
        reference_id: reference_id
      }
    }

    const comments = await commentRepository.find({
      relations: {
        owner: true,
      },
      where: conditions
    });

    res.status(200).json({ comments });
  } catch (error) {
    next(error);
  }
};

export const createComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = (req as any).user;
    const { type, contents, tags, reference_id, started_at, ended_at } = req.body.payload;

    const comment = commentRepository.create({
      type,
      contents,
      tags,
      reference_id,
      started_at,
      ended_at,
      owner: user.id
    });

    await commentRepository.save(comment);
    res.status(201).json({ message: 'Comment created successfully' });
  } catch (error) {
    next(error);
  }
};

export const updateComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = (req as any).user;
    const id = req.params.id;

    const comment = await commentRepository.findOne({
      where: { id: Number(id) },
      relations: ['owner']
    });

    if (!comment) {
      return next(new AppError('Comment is not exist', 400));
    }

    if (comment.owner?.id !== user.id) {
      return next(new AppError('Cannot update comment', 403));
    }

    const { type, contents, tags, reference_id, started_at, ended_at } = req.body.payload;
    comment.contents = contents;
    comment.tags = tags;
    comment.type = type;
    comment.reference_id = reference_id;
    comment.started_at = started_at;
    comment.ended_at = ended_at;
    await commentRepository.save(comment);
    res.status(200).json({ message: 'Comment updated successfully' });
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = (req as any).user;
    const id = req.params.id;

    const comment = await commentRepository.findOne({
      where: { id: Number(id) },
      relations: ['owner']
    });

    if (!comment) {
      return next(new AppError('Comment is not exist', 400));
    }

    if (comment.owner?.id !== user.id) {
      return next(new AppError('Cannot delete comment', 403));
    }
    await commentRepository.delete({ id: comment.id });
    res.status(200).json({ message: 'Comment removed successfully' });
  } catch (error) {
    next(error);
  }
};
