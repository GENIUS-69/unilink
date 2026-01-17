import { v2 as cloudinary } from "cloudinary";

export const uploadImage = async (filePath, folder) => {
  // Configure Cloudinary at runtime (CRITICAL FIX)
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  return await cloudinary.uploader.upload(filePath, {
    folder
  });
};

export const deleteImage = async (publicId) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  return await cloudinary.uploader.destroy(publicId);
};
