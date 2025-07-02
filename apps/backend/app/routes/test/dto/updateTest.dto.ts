import { z } from "zod";

export const UpdateTestByIdDTOSchema = z.object({
	title: z.string(),
	description: z.string(),
	postText: z.optional(z.string()),
	difficulty: z.enum(["easy", "medium", "hard"]),
	specialty: z.string()
});

export const UpdateTestByIdParamsDTOSchema = z.object({
	id: z.string()
});
