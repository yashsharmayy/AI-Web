import express from "express";
import rateLimit from "express-rate-limit";
import {
  submitContact,
  getContacts,
  updateContactStatus,
  deleteContact,
  replyContact,
} from "../controllers/contact.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.middleware.js";

const router = express.Router();
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,

  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    error: "Too many contact requests. Please try again later.",
  },
});
router.post("/", contactLimiter, submitContact);

router.post("/", submitContact);
router.get("/", protect, adminOnly, getContacts);
router.put("/:id/status", protect, adminOnly, updateContactStatus);
router.post("/:id/reply", protect, adminOnly, replyContact);
router.delete("/:id", protect, adminOnly, deleteContact);

export default router;
