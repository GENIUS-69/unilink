import User from "../models/user.model.js";
import { uploadImage, deleteImage } from "../utils/cloudinary.js";

export const getMyProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user
  });
};

export const updateMyProfile = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    if (name) user.name = name;
    if (bio) user.bio = bio;

    if (req.file) {
      // delete old avatar
      if (user.avatar?.public_id) {
        await deleteImage(user.avatar.public_id);
      }

      const result = await uploadImage(
        req.file.path,
        "unilink/avatars"
      );

      user.avatar = {
        public_id: result.public_id,
        url: result.secure_url
      };
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const adminTest = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin"
  });
};
