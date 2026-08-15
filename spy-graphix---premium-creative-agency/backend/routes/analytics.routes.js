import express from 'express';
import { getAnalytics } from '../controllers/analytics.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { adminOnly } from '../middleware/admin.middleware.js';

const router = express.Router();

router.get('/', protect, adminOnly, getAnalytics);

export default router;
