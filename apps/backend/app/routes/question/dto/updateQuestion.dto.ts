import { z } from "zod";

export const UpdateQuestionParamsDTOSchema = z.object({
	id: z.string()
});

export const UpdateQuestionDTOSchema = z.object({
	type: z.string(),
	question: z.string(),
	answersCount: z.optional(z.number())
});
