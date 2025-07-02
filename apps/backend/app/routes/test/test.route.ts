import { Router } from "express";
import { authMiddleware } from "@/app/middlewares/authMiddleware";
import {
	createTest,
	deleteTestById,
	getTestById,
	getTests,
	updateTestById
} from "./test.controller";

const router = Router();

router.get("/", authMiddleware, getTests);
router.get("/:id", authMiddleware, getTestById);
router.post("/", authMiddleware, createTest);
router.put("/:id", authMiddleware, updateTestById);
router.delete("/:id", authMiddleware, deleteTestById);

export const testRoute = router;
