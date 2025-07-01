import { z } from "zod";

export const GetOrganizationDTOSchema = z.object({
	id: z.string()
});
