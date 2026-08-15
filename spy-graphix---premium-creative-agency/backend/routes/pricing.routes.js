import express from 'express';
import {
  getPricings,
  createPricing,
  updatePricing,
  deletePricing,
} from '../controllers/pricing.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { adminOnly } from '../middleware/admin.middleware.js';

const router = express.Router();

router.get('/', getPricings);
router.post('/', protect, adminOnly, createPricing);
router.put('/:id', protect, adminOnly, updatePricing);
router.delete('/:id', protect, adminOnly, deletePricing);

export default router;
