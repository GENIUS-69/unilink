import express from "express";
import { registerDeviceToken } from "../controllers/notification.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", authMiddleware, registerDeviceToken);

export default router;
