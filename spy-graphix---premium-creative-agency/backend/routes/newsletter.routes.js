import express from 'express';
import {
  subscribeNewsletter,
  getSubscribers,
  deleteSubscriber,
  exportCSV,
} from '../controllers/newsletter.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { adminOnly } from '../middleware/admin.middleware.js';

const router = express.Router();

router.post('/', subscribeNewsletter);
router.get('/', protect, adminOnly, getSubscribers);
router.get('/export-csv', protect, adminOnly, exportCSV);
router.delete('/:id', protect, adminOnly, deleteSubscriber);

export default router;
