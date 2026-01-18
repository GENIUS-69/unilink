import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error("❌ Environment variables not loaded properly");
}

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`UniLink server running on port ${PORT}`);
  })
})

