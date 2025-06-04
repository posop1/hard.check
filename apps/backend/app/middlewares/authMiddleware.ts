/* eslint-disable @typescript-eslint/no-namespace */
import { JWT_SECRET } from "@/main";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authRepo } from "../repositories/auth/PrismaAuthRepository";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization;

	if (authHeader) {
		const token = authHeader.split(" ")[1];

		try {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const decoded = jwt.verify(token, JWT_SECRET) as any;

			const session = await authRepo.findSession({ token, organizationId: decoded.organizationId });

			if (!session) {
				return res.sendStatus(403);
			}

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			req.organization = decoded;
			next();
		} catch (error) {
			return res.sendStatus(403);
		}
	} else {
		res.sendStatus(401);
	}
};
