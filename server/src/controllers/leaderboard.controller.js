import User from "../models/user.model.js";

export const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find()
      .select("name reputation")
      .sort({ reputation: -1 })
      .limit(20);

    res.status(200).json({
      success: true,
      leaderboard: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load leaderboard"
    });
  }
};
