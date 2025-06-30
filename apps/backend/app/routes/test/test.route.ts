import { Router } from "express";
import { authMiddleware } from "@/app/middlewares/authMiddleware";
import { createTest, getTestById, getTests } from "./test.controller";

const router = Router();

router.get("/", authMiddleware, getTests);
router.get("/:id", authMiddleware, getTestById);
router.post("/", authMiddleware, createTest);

export const testRoute = router;
