import express from "express";
import todoRouter from "./routes/todoRoutes";
import authRouter from "./routes/authRoutes";

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", todoRouter);
app.use("/auth", authRouter);

export default app;
