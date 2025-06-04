import { Router } from "express";
import { login, logout, logoutAll, registerOrganization } from "./auth.controller";
import { authMiddleware } from "@/app/middlewares/authMiddleware";

const router = Router();

router.post("/register", registerOrganization);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.post("/logoutAll", authMiddleware, logoutAll);

export const authRouter = router;
