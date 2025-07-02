import { Request, Response } from "express";
import { logger } from "@/libs";
import z from "zod";
import { GetQuestionsDTOSchema } from "./dto/getQuestions.dto";
import { questionRepo } from "@/app/repositories/question/PrismaQuestionRepository";
import { CreateQuestionDTOSchema } from "./dto/createQuestion.dto";
import { DeleteQuestionDTOSchema } from "./dto/deleteQuestion.dto";
import { UpdateQuestionDTOSchema, UpdateQuestionParamsDTOSchema } from "./dto/updateQuestion.dto";

export async function getQuestions(req: Request, res: Response) {
	try {
		const getQuestionsDTO = GetQuestionsDTOSchema.parse(req.query);

		const { testId } = getQuestionsDTO;

		const questions = await questionRepo.getQuestions(testId);
		if (!questions) {
			return res.status(404).json({ message: "questions not found" });
		}

		res.status(200).json(questions);
	} catch (error) {
		logger.error("ERROR: getQuestions - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}

export async function createQuestion(req: Request, res: Response) {
	try {
		const createQuestionDTO = CreateQuestionDTOSchema.parse(req.body);

		const question = await questionRepo.createQuestion(createQuestionDTO);

		if (question) {
			res.status(200).json(question);
		}
	} catch (error) {
		logger.error("ERROR: createQuestion - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}

export async function updateQuestion(req: Request, res: Response) {
	try {
		const updateQuestionDTO = UpdateQuestionDTOSchema.parse(req.body);
		const updatedQuestionParamsDTO = UpdateQuestionParamsDTOSchema.parse(req.params);

		const { question, type, answersCount } = updateQuestionDTO;
		const { id } = updatedQuestionParamsDTO;

		const existingQuestion = await questionRepo.findQuestion(id);
		if (!existingQuestion) {
			return res.status(404).json({ message: "question not found" });
		}

		const updatedQuestion = await questionRepo.updateQuestion({ question, id, type, answersCount });

		res.status(200).json(updatedQuestion);
	} catch (error) {
		logger.error("ERROR: updateQuestion - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}

export async function deleteQuestion(req: Request, res: Response) {
	try {
		const deleteQuestionDTO = DeleteQuestionDTOSchema.parse(req.params);

		const { id } = deleteQuestionDTO;
		const question = await questionRepo.findQuestion(id);
		if (!question) {
			return res.status(404).json({ message: "question not found" });
		}

		const isDeleted = await questionRepo.deleteQuestion(id);

		if (isDeleted) {
			res.status(200).json({
				message: "success"
			});
		} else {
			res.status(400).json({ message: "Something went wrong" });
		}
	} catch (error) {
		logger.error("ERROR: deleteQuestion - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}
