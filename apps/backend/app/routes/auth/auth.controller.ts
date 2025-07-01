import { Request, Response } from "express";
import z from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { logger } from "@/libs";
import { IRegisterDTO, RegisterDTOSchema } from "./dto/register.dto";
import { ILoginDTO, LoginDTOSchema } from "./dto/login.dto";
import { organizationRepo } from "@/app/repositories/organization/PrismaOrganizationRepository";
import { JWT_SECRET } from "@/main";
import { authRepo } from "@/app/repositories/auth/PrismaAuthRepository";
import { LogoutAllDTOSchema } from "./dto/logoutAll.dto";

export async function registerOrganization(
	req: Request<never, never, IRegisterDTO>,
	res: Response
) {
	try {
		// TODO не работает сессия
		const registerDTO = RegisterDTOSchema.parse(req.body);

		const { email, name, password } = registerDTO;

		const organizationIsExist = await organizationRepo.findOrganization(email);

		if (organizationIsExist) {
			return res.status(400).json({ message: "organization already exists" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const organization = await organizationRepo.createOrganization({ email, name, hashedPassword });
		if (organization) {
			const token = jwt.sign({ userId: organization.id, email: organization.email }, JWT_SECRET, {
				expiresIn: "24h"
			});

			const expiresAt = new Date();
			expiresAt.setHours(expiresAt.getHours() + 24);

			await authRepo.createSession({
				organizationId: organization.id,
				token,
				expiresAt
			});

			res.status(201).json({
				organizationId: organization?.id,
				name: organization?.name,
				email: organization?.email,
				token
			});
		}
	} catch (error) {
		logger.error("ERROR: registerOrganization - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}

export async function login(req: Request<never, never, ILoginDTO>, res: Response) {
	try {
		const loginDTO = LoginDTOSchema.parse(req.body);

		const { email, password } = loginDTO;

		const organization = await organizationRepo.findOrganization(email);
		if (!organization) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const isPasswordValid = await bcrypt.compare(password, organization.password);
		if (!isPasswordValid) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const token = jwt.sign({ userId: organization.id, email: organization.email }, JWT_SECRET, {
			expiresIn: "24h"
		});

		const expiresAt = new Date();
		expiresAt.setHours(expiresAt.getHours() + 24);

		await authRepo.createSession({
			organizationId: organization.id,
			token,
			expiresAt
		});

		res.json({
			token,
			organizationId: organization.id,
			email: organization.email,
			name: organization.name
		});
	} catch (error) {
		logger.error("ERROR: login - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}

export async function logout(req: Request, res: Response) {
	try {
		const token = req.headers.authorization?.split(" ")[1];

		if (token) {
			await authRepo.deleteSession(token);
		}

		res.sendStatus(200);
	} catch (error) {
		logger.error("ERROR: logout - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}

export async function logoutAll(req: Request, res: Response) {
	try {
		const logoutAllDTO = LogoutAllDTOSchema.parse(req.body);

		const { organizationId } = logoutAllDTO;

		await authRepo.deleteAllSessions(organizationId);

		res.sendStatus(200);
	} catch (error) {
		logger.error("ERROR: logoutAll - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}
