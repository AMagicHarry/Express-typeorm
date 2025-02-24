import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../config/ormconfig";
import { Entity } from "../entities/entity.entity";

const entityRepository = AppDataSource.getRepository(Entity);

export const getEntities = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const entities = await entityRepository.find();

    res.status(200).json({ entities });
  } catch (error) {
    next(error);
  }
};