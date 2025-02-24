import { Router } from "express";
import { approveGauges, createGauge, getGauges, updateGaugeValue } from "../controllers/gauge.controller";

const router = Router();

router.get('/', getGauges);
router.post('/', createGauge);
router.patch('/approve', approveGauges);
router.patch('/:id/update-value', updateGaugeValue);

export default router;