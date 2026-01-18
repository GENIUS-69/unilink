import User from "../models/user.model.js";

export const addReputation = async (userId, points) => {
  try {
    await User.findByIdAndUpdate(userId, {
      $inc: { reputation: points }
    });
  } catch (error) {
    console.error("Reputation update failed:", error.message);
  }
};
