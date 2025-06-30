import { z } from "zod";

export const GetTestByIdParamsDTOSchema = z.object({
	id: z.string()
});

export const GetTestByIdQueryDTOSchema = z.object({
	organizationsId: z.string()
});
