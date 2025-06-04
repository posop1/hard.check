import z from "zod";

export interface IRegisterDTO {
	email: string;
	password: string;
	name: string;
}

export const RegisterDTOSchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(6)
});
