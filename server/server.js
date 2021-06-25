import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", rootRouter);
app.use("/users", userRouter);

export default app;
