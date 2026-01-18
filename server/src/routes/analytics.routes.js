import express from "express";
import { getAnalyticsOverview } from "../controllers/analytics.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/overview", authMiddleware, getAnalyticsOverview);

export default router;
