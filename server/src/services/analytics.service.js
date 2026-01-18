import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import Analytics from "../models/analytics.model.js";

export const generateDailyAnalytics = async () => {
  const today = new Date().toISOString().split("T")[0];

  const totalUsers = await User.countDocuments();
  const totalPosts = await Post.countDocuments();

  const newUsers = await User.countDocuments({
    createdAt: { $gte: new Date(today) }
  });

  const newPosts = await Post.countDocuments({
    createdAt: { $gte: new Date(today) }
  });

  const posts = await Post.find();

  let totalComments = 0;
  let totalLikes = 0;

  posts.forEach(post => {
    totalComments += post.comments.length;
    totalLikes += post.likes.length;
  });

  await Analytics.findOneAndUpdate(
    { date: today },
    {
      date: today,
      totalUsers,
      newUsers,
      totalPosts,
      newPosts,
      totalComments,
      totalLikes
    },
    { upsert: true, new: true }
  );
};
