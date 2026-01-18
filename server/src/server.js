import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import { generateDailyAnalytics } from "./services/analytics.service.js";


dotenv.config();

if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error("❌ Environment variables not loaded properly");
}

const PORT = process.env.PORT || 5000;

connectDB().then(async() => {
  await generateDailyAnalytics();
  app.listen(PORT, () => {
    import("./cron/analytics.cron.js");
    console.log(`UniLink server running on port ${PORT}`);
  })
})

