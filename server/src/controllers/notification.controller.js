import User from "../models/user.model.js";

export const registerDeviceToken = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ success: false, message: "Token required" });

    const user = await User.findById(req.user._id);

    if (!user.deviceTokens.includes(token)) {
      user.deviceTokens.push(token);
      await user.save();
    }

    res.status(200).json({ success: true, message: "Device token registered" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
