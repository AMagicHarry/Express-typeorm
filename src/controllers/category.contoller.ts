import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../config/ormconfig";
import { Category } from "../entities/category.entity";

const categoryRepository = AppDataSource.getRepository(Category);

export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await categoryRepository.find();

    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
};