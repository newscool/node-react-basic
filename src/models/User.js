import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 5,
  },
  role: {
    type: Number,
    default: 0,
  },
  avatar: String,
  token: String,
  tokenExp: Number,
});

const User = mongoose.model("User", userSchema);

export default User;
