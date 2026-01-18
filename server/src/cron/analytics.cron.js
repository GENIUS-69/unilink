import cron from "node-cron";
import { generateDailyAnalytics } from "../services/analytics.service.js";

cron.schedule("0 0 * * *", async () => {
  console.log("📊 Running daily analytics job...");
  await generateDailyAnalytics();
});
