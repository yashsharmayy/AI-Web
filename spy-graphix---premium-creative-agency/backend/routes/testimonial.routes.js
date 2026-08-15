import express from 'express';
import {
  getTestimonials,
  createTestimonial,
  deleteTestimonial,
} from '../controllers/testimonial.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { adminOnly } from '../middleware/admin.middleware.js';

const router = express.Router();

router.get('/', getTestimonials);
router.post('/', protect, adminOnly, createTestimonial);
router.delete('/:id', protect, adminOnly, deleteTestimonial);

export default router;
