import express from "express";
import auth from "../middlewares/auth";
import { join, login, authControl, logout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/join", join);
userRouter.post("/login", login);
userRouter.get("/logout", auth, logout);
userRouter.get("/auth", auth, authControl);

export default userRouter;
