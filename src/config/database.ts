import { AppDataSource } from './ormconfig';

export const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log('✅ Database Connected');
  } catch (error) {
    console.error('❌ Database Connection Error:', error);
    process.exit(1);
  }
};
