import { logger } from "@/libs";
import { prisma } from "@/main";

async function createSession(params: { organizationId: number; token: string; expiresAt: Date }) {
	try {
		const { organizationId, token, expiresAt } = params;

		await prisma.session.create({
			data: {
				organizationId,
				token,
				expiresAt
			}
		});
	} catch (error) {
		logger.error("ERROR: AUTH REPO -  createSession", error);
	}
}

async function findSession(params: { token: string; organizationId: number }) {
	try {
		const { token, organizationId } = params;

		const session = await prisma.session.findFirst({
			where: {
				token,
				organizationId,
				expiresAt: { gt: new Date() }
			}
		});

		return session;
	} catch (error) {
		logger.error("ERROR: AUTH REPO -  findSession", error);
	}
}

async function deleteSession(token: string) {
	try {
		await prisma.session.deleteMany({ where: { token } });
	} catch (error) {
		logger.error("ERROR: AUTH REPO -  deleteSession", error);
	}
}

async function deleteAllSessions(organizationId: number) {
	try {
		await prisma.session.deleteMany({ where: { organizationId: organizationId } });
	} catch (error) {
		logger.error("ERROR: AUTH REPO -  deleteAllSessions", error);
	}
}

export const authRepo = {
	createSession,
	findSession,
	deleteSession,
	deleteAllSessions
};
