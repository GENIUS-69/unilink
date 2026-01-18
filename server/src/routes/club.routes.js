import express from "express";
import {
  createClub,
  getAllClubs,
  toggleClubMembership
} from "../controllers/club.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, createClub);
router.get("/", authMiddleware, getAllClubs);
router.put("/:id/join", authMiddleware, toggleClubMembership);

export default router;
