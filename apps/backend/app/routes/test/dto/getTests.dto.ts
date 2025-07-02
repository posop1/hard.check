import { z } from "zod";

export const GetTestsDTOSchema = z.object({
	organizationsId: z.string()
});
