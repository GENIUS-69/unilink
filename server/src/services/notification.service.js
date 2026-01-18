import admin from "../config/firebase.js";

export const sendPushNotification = async (tokens, title, body, data = {}) => {
  if (!tokens || tokens.length === 0) return;

  const message = {
    notification: { title, body },
    data,
    tokens
  };

  try {
    const response = await admin.messaging().sendMulticast(message);
    console.log("Push Notification Sent:", response.successCount, "success,", response.failureCount, "failures");
  } catch (err) {
    console.error("❌ Push Notification Error:", err.message);
  }
};
