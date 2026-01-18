import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    date: {
      type: String, // YYYY-MM-DD
      required: true,
      unique: true
    },

    totalUsers: Number,
    newUsers: Number,

    totalPosts: Number,
    newPosts: Number,

    totalComments: Number,
    totalLikes: Number
  },
  { timestamps: true }
);

export default mongoose.model("Analytics", analyticsSchema);
