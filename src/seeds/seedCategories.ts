import { AppDataSource } from "../config/ormconfig";
import { Category } from "../entities/category.entity";

export const seedCategories = async () => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = [
    {
      name: "Air traffic business travel",
    },
    {
      name: "Buildings",
    },
    {
      name: "Commuting",
    },
    {
      name: "Company cars",
    },
    {
      name: "Electricity",
    },
    {
      name: "Equipment",
    },
    {
      name: "Finances",
    },
    {
      name: "Fuels",
    },
    {
      name: "HR",
    },
    {
      name: "Heating",
    },
    {
      name: "Lease cars",
    },
    {
      name: "Private vehicles business travel",
    },
    {
      name: "Transport",
    },
  ];

  for (const item of categories) {
    const existingCategory = await categoryRepository.findOne({ where: { name: item.name } });
    if (!existingCategory) {
      const category = categoryRepository.create({ name: item.name });
      await categoryRepository.save(category);
    }
  }
};
