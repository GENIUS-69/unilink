import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    reputation: {
      type: Number,
      default: 0
    },
    role: {
      type: String,
      enum: ["student", "faculty", "admin"],
      default: "student"
    },
    bio: { type: String, default: "" },
    avatar: {
      public_id: String,
      url: String
    },
    deviceTokens: {
      type: [String], // FCM tokens
      default: []
    }
  },
  { timestamps: true }
);

// Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;
  this.password = await bcrypt.hash(this.password, 10);
  next;
});

// Compare password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model("User", userSchema);
