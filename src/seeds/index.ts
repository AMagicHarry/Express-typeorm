import { AppDataSource } from '../config/ormconfig';
import { seedRoles } from './seedRoles';
import { seedCategories } from './seedCategories';
import { seedEntities } from './seedEntities';
import { seedGauges } from './seedGauges';

const runSeeds = async () => {
  try {
    await AppDataSource.initialize();
    console.log('✅ Database Connected');

    await seedRoles();
    await seedCategories();
    await seedEntities();
    await seedGauges();

    console.log('🎉 Seeding Complete!');
    await AppDataSource.destroy();
  } catch (error) {
    console.error('❌ Seeding Failed:', error);
    await AppDataSource.destroy();
  }
};

runSeeds();