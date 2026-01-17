import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Mongoose v7+ automatically handles options
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Exit server if DB fails
  }
};

export default connectDB;
