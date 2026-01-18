import express from "express";
import {
  createPost,
  getAllPosts,
  likeUnlikePost,
  addComment,
  deleteComment
} from "../controllers/post.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, createPost);
router.get("/", authMiddleware, getAllPosts);
router.put("/:id/like", authMiddleware, likeUnlikePost);

// COMMENTS
router.post("/:id/comment", authMiddleware, addComment);
router.delete("/:postId/comment/:commentId", authMiddleware, deleteComment);

export default router;
