import { logger } from "@/libs";
import { prisma } from "@/main";

async function createTest(params: { title: string; description: string; organizationId: number }) {
	try {
		const test = await prisma.test.create({
			data: {
				title: params.title,
				organizationId: params.organizationId,
				description: params.description
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

async function getTests(organizationId: number) {
	try {
		const tests = await prisma.test.findMany({
			where: {
				organizationId
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

async function getTestById(organizationId: string, id: string) {
	try {
		const test = await prisma.test.findUnique({
			where: {
				id: Number(id),
				organizationId: Number(organizationId)
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

export const testRepo = {
	getTests,
	getTestById,
	createTest
};
