import { z } from "zod";

export const CreateQuestionDTOSchema = z.object({
	testId: z.string(),
	type: z.string(),
	question: z.string(),
	answersCount: z.optional(z.number())
});
