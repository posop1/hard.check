import { z } from "zod";

export const GetQuestionsDTOSchema = z.object({
	testId: z.string()
});
