import { z } from "zod";

export const CreateTestDTOSchema = z.object({
	title: z.string(),
	description: z.string(),
	organizationId: z.number()
});
