import z from "zod";

export interface ILoginDTO {
	email: string;
	password: string;
}

export const LoginDTOSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6)
});
