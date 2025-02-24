import { Router } from "express";
import { getEntities } from "../controllers/entity.controller";

const router = Router();

router.get('/', getEntities);

export default router;