import { logger } from "@/libs";
import { prisma } from "@/main";

async function findTest(id: string) {
	try {
		const existingTest = await prisma.test.findUnique({ where: { id: Number(id) } });

		return existingTest;
	} catch (error) {
		logger.error("ERROR: TEST REPO -  findTestById", error);
	}
}

async function createTest(params: {
	title: string;
	description: string;
	organizationId: number;
	postText?: string;
	difficulty: string;
	specialty: string;
}) {
	try {
		const test = await prisma.test.create({
			data: {
				title: params.title,
				organizationId: params.organizationId,
				description: params.description,
				postText: params.postText,
				difficulty: params.difficulty,
				specialty: params.specialty
			},
			include: {
				questions: true
			}
		});

		return test;
	} catch (error) {
		logger.error("ERROR: TEST REPO -  createTest", error);
	}
}

async function getTests(organizationId: string) {
	try {
		const tests = await prisma.test.findMany({
			where: {
				organizationId: Number(organizationId)
			},
			include: {
				questions: true
			}
		});

		return tests;
	} catch (error) {
		logger.error("ERROR: TEST REPO -  getTests", error);
	}
}

async function getTestById(id: string) {
	try {
		const test = await prisma.test.findUnique({
			where: {
				id: Number(id)
			},
			include: {
				questions: true
			}
		});

		return test;
	} catch (error) {
		logger.error("ERROR: TEST REPO -  getTestById", error);
	}
}

async function deleteTest(id: string) {
	try {
		await prisma.test.delete({ where: { id: Number(id) } });

		return true;
	} catch (error) {
		logger.error("ERROR: TEST REPO -  deleteTest", error);
	}
}

async function updateTest(params: {
	id: string;
	title: string;
	description: string;
	postText?: string;
	difficulty: string;
	specialty: string;
}) {
	try {
		const { id, title, description, postText, difficulty, specialty } = params;

		const updatedTest = await prisma.test.update({
			where: { id: Number(id) },
			data: {
				title,
				description,
				postText,
				difficulty,
				specialty
			}
		});

		return updatedTest;
	} catch (error) {
		logger.error("ERROR: TEST REPO -  updateTest", error);
	}
}

export const testRepo = {
	getTests,
	getTestById,
	createTest,
	updateTest,
	findTest,
	deleteTest
};
