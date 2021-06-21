import express from "express";
import { join, login } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/join", join);
userRouter.post("/login", login);

export default userRouter;
