import express from 'express';
import { getFAQs, createFAQ, deleteFAQ } from '../controllers/faq.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { adminOnly } from '../middleware/admin.middleware.js';

const router = express.Router();

router.get('/', getFAQs);
router.post('/', protect, adminOnly, createFAQ);
router.delete('/:id', protect, adminOnly, deleteFAQ);

export default router;
