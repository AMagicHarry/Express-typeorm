import { Router } from "express";
import { getCategories } from "../controllers/category.contoller";

const router = Router();

router.get('/', getCategories);

export default router;