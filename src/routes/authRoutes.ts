import { Router } from "express";
import { loginRegister, showUsers } from "../controllers/authController";
import { AuthMidlleware, authenticate } from "../middlewares/authMiddlewares";

const router = Router();

router.get("/list-user", AuthMidlleware, showUsers);
router.post("/register", loginRegister);
router.post("/login", authenticate);

export default router;
