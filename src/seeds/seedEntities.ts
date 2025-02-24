import { AppDataSource } from "../config/ormconfig";
import { Entity } from "../entities/entity.entity";

export const seedEntities = async () => {
  const entityRepository = AppDataSource.getRepository(Entity);
  const entities = [
    {
      name: "Entity 1",
    },
  ];

  for (const item of entities) {
    const existingEntity = await entityRepository.findOne({ where: { name: item.name } });
    if (!existingEntity) {
      const entity = entityRepository.create({ name: item.name });
      await entityRepository.save(entity);
    }
  }
};
