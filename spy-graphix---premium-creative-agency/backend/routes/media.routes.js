import express from 'express';
import {
  getMedia,
  uploadMedia,
  updateMedia,
  deleteMedia,
} from '../controllers/media.controller.js';
import { upload } from '../middleware/upload.middleware.js';
import { protect } from '../middleware/auth.middleware.js';
import { adminOnly } from '../middleware/admin.middleware.js';

const router = express.Router();

router.get('/', protect, adminOnly, getMedia);
router.post('/upload', protect, adminOnly, upload.single('image'), uploadMedia);
router.put('/:id', protect, adminOnly, updateMedia);
router.delete('/:id', protect, adminOnly, deleteMedia);

export default router;
