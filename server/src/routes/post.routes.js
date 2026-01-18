import express from "express";
import {
  createPost,
  getAllPosts,
  likeUnlikePost
} from "../controllers/post.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, createPost);
router.get("/", authMiddleware, getAllPosts);
router.put("/:id/like", authMiddleware, likeUnlikePost);

export default router;
