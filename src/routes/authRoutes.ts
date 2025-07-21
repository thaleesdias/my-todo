import { Router } from "express";
import { loginRegister, showUsers } from "../controllers/authController";
import { AuthMidlleware } from "../middlewares/authMiddlewares";

const router = Router();

router.get("/list-user", AuthMidlleware, showUsers);
router.post("/register", loginRegister);
// router.post("/login");

export default router;
