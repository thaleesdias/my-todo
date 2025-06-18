import express from "express";
import router from "./routes/routes";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
