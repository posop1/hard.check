import { z } from "zod";

export const DeleteTestDTOSchema = z.object({
	id: z.string()
});
