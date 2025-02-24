import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../config/ormconfig';
import { Gauge } from '../entities/gauge.entity';
import AppError from '../middleware/errorHandler';
import { Category } from "../entities/category.entity";
import { Entity } from "../entities/entity.entity"
import { FindOptionsWhere, In, Like } from "typeorm";
import { GaugeValue, GaugeValueStatus } from '../entities/gaugeValue.entity';

const gaugeRepository = AppDataSource.getRepository(Gauge);
const gaugeValueRepository = AppDataSource.getRepository(GaugeValue);
const categoryRepository = AppDataSource.getRepository(Category);
const entityRepository = AppDataSource.getRepository(Entity);

export const getGauges = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { searchKey = '', categories, entities } = req.query;

    const conditions: FindOptionsWhere<Gauge> = {};
    if (Array.isArray(categories) && categories.length > 0) {
      conditions.categories = { id: In(categories) };
    }
    if (Array.isArray(entities) && entities.length > 0) {
      conditions.entities = { id: In(entities) };
    }

    const gauges = await gaugeRepository.find({
      relations: ['categories', 'entities', 'values'],
      where: ['name', 'description'].map((field) => ({
        [field]: Like(`%${searchKey.toString().toLowerCase()}%`),
        ...conditions
      }))
    });

    res.status(200).json({ gauges });
  } catch (error) {
    next(error);
  }
};

export const createGauge = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      name,
      description,
      unit,
      started_on,
      ended_on,
      time_interval,
      import_only,
      entity_ids,
      category_ids
    } = req.body
    const categories = await categoryRepository.find({ where: { id: In(category_ids) } });
    const entities = await entityRepository.find({ where: { id: In(entity_ids) } });
    const newGauge = gaugeRepository.create({
      name,
      description,
      unit,
      time_interval,
      started_on,
      ended_on,
      import_only,
      categories,
      entities,
    });

    await gaugeRepository.save(newGauge);
    res.status(201).json({ message: 'Gauge created successfully' });
  } catch (error) {
    next(error);
  }
};

export const approveGauges = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ids, year, quarter } = req.body;

    const gauges = await gaugeRepository.find({
      where: { id: In(ids) }
    });

    for (const gauge of gauges) {
      await gaugeValueRepository.update({
        gauge_id: gauge.id,
        year,
        quarter
      }, {
        status: GaugeValueStatus.APPROVED
      });
    }

    res.status(200).json({ message: 'Gauges approved successfully' });
  } catch (error) {
    next(error);
  }
};

export const submitGauge = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const user = (req as any).user;
    const gauge = await gaugeRepository.findOne({ where: { id: Number(id) } });

    if (!gauge) {
      return next(new AppError('Gauge does not exist', 404));
    }

    gauge.submitted_by = user;
    gauge.submitted_date = new Date();
    await gaugeRepository.save(gauge);
    res.status(200).json({ gauge });
  } catch (error) {
    next(error);
  }
};

export const updateGaugeValue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const { year, quarter, value } = req.body;

    const gauge = await gaugeRepository.findOne({ where: { id: Number(id) } });

    if (!gauge) {
      return next(new AppError('Gauge does not exist', 404));
    }

    const existingValue = await gaugeValueRepository.findOne({
      where: {
        gauge_id: gauge.id,
        year,
        quarter,
      }
    });

    const gaugeValue = existingValue ? existingValue : gaugeValueRepository.create({
      gauge_id: gauge.id,
      year,
      quarter,
    });

    await gaugeValueRepository.save({
      ...gaugeValue,
      status: GaugeValueStatus.DRAFT,
      value
    });

    res.status(200).json({ message: 'Gauge value was updated successfully.' });
  } catch (error) {
    next(error);
  }
};
