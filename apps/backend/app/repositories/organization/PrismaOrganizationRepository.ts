import { logger } from "@/libs";
import { prisma } from "@/main";

async function findOrganization(email: string) {
	try {
		const existingOrganization = await prisma.organization.findUnique({ where: { email } });

		return existingOrganization;
	} catch (error) {
		logger.error("ERROR: ORG REPO -  checkToUserIsAlreadyExist", error);
	}
}

async function createOrganization(params: { email: string; name: string; hashedPassword: string }) {
	try {
		const organization = await prisma.organization.create({
			data: {
				email: params.email,
				name: params.name,
				password: params.hashedPassword
			}
		});

		return organization;
	} catch (error) {
		logger.error("ERROR: ORG REPO -  createOrganization", error);
	}
}

export const organizationRepo = {
	findOrganization,
	createOrganization
};
