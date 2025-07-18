import { z } from "zod";

export const CreateTestDTOSchema = z.object({
	title: z.string(),
	description: z.string(),
	organizationId: z.number(),
	postText: z.optional(z.string()),
	difficulty: z.enum(["easy", "medium", "hard"]),
	specialty: z.string()
});
