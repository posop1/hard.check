import { Router } from "express";
import { authMiddleware } from "@/app/middlewares/authMiddleware";
import {
	createQuestion,
	deleteQuestion,
	getQuestions,
	updateQuestion
} from "./question.controller";

const router = Router();

router.get("/", authMiddleware, getQuestions);
router.post("/", authMiddleware, createQuestion);
router.put("/:id", authMiddleware, updateQuestion);
router.delete("/:id", authMiddleware, deleteQuestion);

export const questionRoute = router;
