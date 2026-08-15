import express from "express";

import {
  login,
  register,
  logout,
  getMe,
  refreshTokenHandler,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

router.get("/me", protect, getMe);

router.post("/refresh", refreshTokenHandler);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
