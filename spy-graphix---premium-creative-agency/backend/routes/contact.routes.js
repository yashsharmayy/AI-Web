import express from 'express';
import {
  submitContact,
  getContacts,
  updateContactStatus,
  deleteContact,
  replyContact,
} from '../controllers/contact.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { adminOnly } from '../middleware/admin.middleware.js';

const router = express.Router();

router.post('/', submitContact);
router.get('/', protect, adminOnly, getContacts);
router.put('/:id/status', protect, adminOnly, updateContactStatus);
router.post('/:id/reply', protect, adminOnly, replyContact);
router.delete('/:id', protect, adminOnly, deleteContact);

export default router;
