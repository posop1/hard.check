import z from "zod";

export const LogoutAllDTOSchema = z.object({
	organizationId: z.number()
});
