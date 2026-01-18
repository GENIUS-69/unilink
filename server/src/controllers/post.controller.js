import Post from "../models/post.model.js";
import { addReputation } from "../services/reputation.service.js";
import REPUTATION_POINTS from "../config/reputation.config.js";
import { sendPushNotification } from "../services/notification.service.js";

// CREATE POST
export const createPost = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({
        success: false,
        message: "Post content is required"
      });
    }

    const post = await Post.create({
      author: req.user._id,
      content
    });

    // ✅ Reputation for creating a post
    await addReputation(req.user._id, REPUTATION_POINTS.CREATE_POST);

    res.status(201).json({
      success: true,
      post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * GET ALL POSTS
 */
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email reputation")
      .populate("comments.user", "name email reputation")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * LIKE / UNLIKE POST
 */
export const likeUnlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    const alreadyLiked = post.likes.includes(req.user._id);

    if (!alreadyLiked) {
      // send notification to post author
      const author = await User.findById(post.author);
      await sendPushNotification(
        author.deviceTokens,
        "Your post got a new like!",
        `User ${req.user.name} liked your post.`,
        { postId: post._id.toString() }
      );
    }

    if (alreadyLiked) {
      post.likes.pull(req.user._id);
    } else {
      post.likes.push(req.user._id);

      // Reputation only when liking (not unliking)
      await addReputation(post.author, REPUTATION_POINTS.POST_LIKE);
    }

    await post.save();

    res.status(200).json({
      success: true,
      message: alreadyLiked ? "Post unliked" : "Post liked"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * ADD COMMENT
 */
export const addComment = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Comment text is required"
      });
    }

    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    post.comments.push({
      user: req.user._id,
      text
    });

    await post.save();

    //Reputation for commenting
    await addReputation(req.user._id, REPUTATION_POINTS.CREATE_COMMENT);

    res.status(201).json({
      success: true,
      message: "Comment added"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/**
 * DELETE COMMENT
 */
export const deleteComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    const comment = post.comments.id(req.params.commentId);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found"
      });
    }

    if (comment.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized"
      });
    }

    comment.deleteOne();
    await post.save();

    res.status(200).json({
      success: true,
      message: "Comment deleted"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
