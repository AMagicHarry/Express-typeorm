import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import authRoutes from './routes/auth.route';
import gaugesRoutes from './routes/gauge.route';
import commentsRoutes from './routes/comment.route';
import entitiesRoutes from './routes/entity.route'
import categoriesRoutes from './routes/category.route'
import errorMiddleware from './middleware/errorMiddleware';
import { authMiddleware } from './middleware/authMiddleware';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api/gauges', authMiddleware, gaugesRoutes);
app.use('/api/comments', authMiddleware, commentsRoutes);
app.use('/api/entities', authMiddleware, entitiesRoutes);
app.use('/api/categories', authMiddleware, categoriesRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
