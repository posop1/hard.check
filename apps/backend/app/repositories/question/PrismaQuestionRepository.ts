import { logger } from "@/libs";
import { prisma } from "@/main";

async function findQuestion(id: string) {
	try {
		const existingQuestion = await prisma.question.findUnique({ where: { id: Number(id) } });

		return existingQuestion;
	} catch (error) {
		logger.error("ERROR: Question REPO -  findQuestion", error);
	}
}

async function getQuestions(testId: string) {
	try {
		const questions = await prisma.question.findMany({
			where: {
				testId: Number(testId)
			}
		});

		return questions;
	} catch (error) {
		logger.error("ERROR: Question REPO -  getQuestions", error);
	}
}

async function createQuestion(params: {
	testId: string;
	type: string;
	question: string;
	answersCount?: number;
}) {
	try {
		const question = await prisma.question.create({
			data: {
				testId: Number(params.testId),
				type: params.type,
				question: params.question,
				answersCount: params.answersCount
			}
		});

		return question;
	} catch (error) {
		logger.error("ERROR: Question REPO -  createQuestions", error);
	}
}

async function updateQuestion(params: {
	id: string;
	type: string;
	question: string;
	answersCount?: number;
}) {
	try {
		const { id, type, question, answersCount } = params;

		const updatedQuestion = await prisma.question.update({
			where: { id: Number(id) },
			data: {
				type,
				question,
				answersCount
			}
		});

		return updatedQuestion;
	} catch (error) {
		logger.error("ERROR: Question REPO -  updateQuestion", error);
	}
}

async function deleteQuestion(id: string) {
	try {
		await prisma.question.delete({ where: { id: Number(id) } });

		return true;
	} catch (error) {
		logger.error("ERROR: Question REPO -  deleteQuestion", error);
	}
}

export const questionRepo = {
	findQuestion,
	getQuestions,
	createQuestion,
	updateQuestion,
	deleteQuestion
};
