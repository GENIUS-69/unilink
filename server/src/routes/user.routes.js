import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import authorizeRoles from "../middlewares/role.middleware.js";
import upload from "../middlewares/upload.middleware.js";
import {
  getMyProfile,
  updateMyProfile,
  adminTest
} from "../controllers/user.controller.js";

const router = express.Router();

// Get logged-in user
router.get("/me", authMiddleware, getMyProfile);

// Update profile + avatar
router.put(
  "/profile",
  authMiddleware,
  upload.single("avatar"),
  updateMyProfile
);

// Admin-only test
router.get(
  "/admin-test",
  authMiddleware,
  authorizeRoles("admin"),
  adminTest
);

export default router;
