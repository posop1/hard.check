import { Request, Response } from "express";
import { logger } from "@/libs";
import z from "zod";
import { GetTestByIdParamsDTOSchema } from "./dto/getTestById.dto";
import { GetTestsDTOSchema } from "./dto/getTests.dto";
import { CreateTestDTOSchema } from "./dto/createTest.dto";
import { testRepo } from "@/app/repositories/test/PrismaTestRepository";
import { UpdateTestByIdDTOSchema, UpdateTestByIdParamsDTOSchema } from "./dto/updateTest.dto";
import { DeleteTestDTOSchema } from "./dto/deleteTest.dto";

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

export async function updateTestById(req: Request, res: Response) {
	try {
		const updateTestDTO = UpdateTestByIdDTOSchema.parse(req.body);
		const updateTestParamsDTO = UpdateTestByIdParamsDTOSchema.parse(req.params);

		const { title, description, postText, difficulty, specialty } = updateTestDTO;
		const { id } = updateTestParamsDTO;

		const test = await testRepo.findTest(id);
		if (!test) {
			return res.status(404).json({ message: "test not found" });
		}

		const updatedTest = await testRepo.updateTest({
			id,
			title,
			description,
			postText,
			difficulty,
			specialty
		});

		res.status(200).json(updatedTest);
	} catch (error) {
		logger.error("ERROR: updateTestById - ", error);

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

		const tests = await testRepo.getTests(organizationsId);

		if (!tests) {
			return res.status(404).json({ message: "tests not found" });
		}

		res.status(200).json(tests);
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
		const getTestByIdParamsDTO = GetTestByIdParamsDTOSchema.parse(req.params);

		const { id } = getTestByIdParamsDTO;

		const test = await testRepo.getTestById(id);
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

export async function deleteTestById(req: Request, res: Response) {
	try {
		const deleteTestByIdDTO = DeleteTestDTOSchema.parse(req.params);

		const { id } = deleteTestByIdDTO;

		const test = await testRepo.findTest(id);
		if (!test) {
			return res.status(404).json({ message: "test not found" });
		}

		const isDeleted = await testRepo.deleteTest(id);

		if (isDeleted) {
			res.status(200).json({
				message: "success"
			});
		} else {
			res.status(400).json({ message: "Something went wrong" });
		}
	} catch (error) {
		logger.error("ERROR: deleteTestById - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}
