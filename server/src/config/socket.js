import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import Message from "../models/message.model.js";

const socketHandler = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*"
    }
  });

  io.use((socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      if (!token) return next(new Error("Authentication error"));

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.userId = decoded.id;

      next();
    } catch (error) {
      next(new Error("Authentication error"));
    }
  });

  io.on("connection", (socket) => {
    console.log("🟢 User connected:", socket.userId);

    socket.join(socket.userId);

    socket.on("sendMessage", async ({ receiverId, text }) => {
      if (!receiverId || !text) return;

      const message = await Message.create({
        sender: socket.userId,
        receiver: receiverId,
        text
      });

      io.to(receiverId).emit("receiveMessage", message);
    });

    socket.on("disconnect", () => {
      console.log("🔴 User disconnected:", socket.userId);
    });
  });
};

export default socketHandler;
