import { Request, Response } from "express";
import { logger } from "@/libs";
import z from "zod";
import { GetTestByIdParamsDTOSchema, GetTestByIdQueryDTOSchema } from "./dto/getTestById.dto";
import { GetTestsDTOSchema } from "./dto/getTests.dto";
import { CreateTestDTOSchema } from "./dto/createTest.dto";
import { testRepo } from "@/app/repositories/test/PrismaTestRepository";

export async function createTest(req: Request, res: Response) {
	try {
		const createTestDTO = CreateTestDTOSchema.parse(req.body);

		const test = await testRepo.createTest(createTestDTO);

		if (test) {
			res.status(200).json(test);
		}
	} catch (error) {
		logger.error("ERROR: createTest - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}

export async function getTests(req: Request, res: Response) {
	try {
		const getTestsDTO = GetTestsDTOSchema.parse(req.query);

		const { organizationsId } = getTestsDTO;

		const tests = await testRepo.getTests(Number(organizationsId));

		if (!tests) {
			return res.status(404).json({ message: "tests not found" });
		}

		res.status(200).json(tests);

		logger.debug("getTests");
	} catch (error) {
		logger.error("ERROR: getTests - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}

export async function getTestById(req: Request, res: Response) {
	try {
		const getTestByIdQueryDTO = GetTestByIdQueryDTOSchema.parse(req.query);
		const getTestByIdParamsDTO = GetTestByIdParamsDTOSchema.parse(req.params);

		const { organizationsId } = getTestByIdQueryDTO;
		const { id } = getTestByIdParamsDTO;

		const test = await testRepo.getTestById(organizationsId, id);
		if (!test) {
			return res.status(404).json({ message: "test not found" });
		}

		res.status(200).json(test);
	} catch (error) {
		logger.error("ERROR: getTestById - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}
