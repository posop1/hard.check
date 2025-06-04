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

async function findOrganizationById(id: string) {
	try {
		const existingOrganization = await prisma.organization.findUnique({ where: { id: Number(id) } });

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

async function getOrganizationById(id: string) {
	try {
		const organization = await prisma.organization.findUnique({ where: { id: Number(id) } });

		return organization;
	} catch (error) {
		logger.error("ERROR: ORG REPO -  getOrganizationById", error);
	}
}
async function updateOrganization(params: { email: string; name: string; id: string }) {
	try {
		const { id, name, email } = params;

		const updatedOrganization = await prisma.organization.update({
			where: { id: Number(id) },
			data: {
				email,
				name
			}
		});

		return updatedOrganization;
	} catch (error) {
		logger.error("ERROR: ORG REPO -  updateOrganization", error);
	}
}

export const organizationRepo = {
	findOrganization,
	createOrganization,
	getOrganizationById,
	findOrganizationById,
	updateOrganization
};
