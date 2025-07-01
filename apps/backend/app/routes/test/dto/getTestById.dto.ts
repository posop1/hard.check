import { z } from "zod";

export const GetTestByIdParamsDTOSchema = z.object({
	id: z.string()
});
