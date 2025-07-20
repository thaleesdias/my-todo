import { Router } from "express";
import { loginRegister } from "../controllers/authController";

const router = Router();

router.post("/register", loginRegister);
// router.post("/login");

export default router;
