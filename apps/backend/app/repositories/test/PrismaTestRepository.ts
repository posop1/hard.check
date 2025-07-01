import { logger } from "@/libs";
import { prisma } from "@/main";

async function findTestById(id: string) {
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
}) {
	try {
		const test = await prisma.test.create({
			data: {
				title: params.title,
				organizationId: params.organizationId,
				description: params.description,
				postText: params.postText
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

// TODO delete

async function deleteTestById(id: string) {
	try {
		await prisma.test.delete({ where: { id: Number(id) } });

		return true;
	} catch (error) {
		logger.error("ERROR: TEST REPO -  deleteTestById", error);
	}
}

async function updateTestById(params: {
	id: string;
	title: string;
	description: string;
	postText?: string;
}) {
	try {
		const { id, title, description, postText } = params;

		const updatedTest = await prisma.test.update({
			where: { id: Number(id) },
			data: {
				title,
				description,
				postText
			}
		});

		return updatedTest;
	} catch (error) {
		logger.error("ERROR: TEST REPO -  updateTestById", error);
	}
}

export const testRepo = {
	getTests,
	getTestById,
	createTest,
	updateTestById,
	findTestById,
	deleteTestById
};
