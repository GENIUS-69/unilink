import express from "express";
import {
  createEvent,
  getAllEvents,
  rsvpEvent
} from "../controllers/event.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, createEvent);
router.get("/", authMiddleware, getAllEvents);
router.put("/:id/rsvp", authMiddleware, rsvpEvent);

export default router;
