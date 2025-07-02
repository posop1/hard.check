import { z } from "zod";

export const DeleteQuestionDTOSchema = z.object({
	id: z.string()
});
