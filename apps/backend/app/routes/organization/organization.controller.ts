import { logger } from "@/libs";
import z from "zod";
import { Request, Response } from "express";
import { GetOrganizationDTOSchema } from "./dto/getOrganization.dto";
import { organizationRepo } from "@/app/repositories/organization/PrismaOrganizationRepository";
import { UpdateOrganizationDTOScheme } from "./dto/updateOrganization.dto";

export async function getOrganizationById(req: Request, res: Response) {
	try {
		const getOrganizationDTO = GetOrganizationDTOSchema.parse(req.params);

		const { id } = getOrganizationDTO;

		const organization = await organizationRepo.getOrganizationById(id);
		if (!organization) {
			return res.status(404).json({ message: "organization not found" });
		}

		res.status(200).json({
			id: organization.id,
			email: organization.email,
			name: organization.name
		});
	} catch (error) {
		logger.error("ERROR: getOrganizationById - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}

export async function updateOrganizationById(req: Request, res: Response) {
	try {
		const updateOrganizationDTO = UpdateOrganizationDTOScheme.parse(req.body);

		const organization = await organizationRepo.findOrganizationById(updateOrganizationDTO.id);
		if (!organization) {
			return res.status(404).json({ message: "organization not found" });
		}

		const updatedOrganization = await organizationRepo.updateOrganization(updateOrganizationDTO);

		res.status(200).json({
			id: updatedOrganization?.id,
			email: updatedOrganization?.email,
			name: updatedOrganization?.name
		});
	} catch (error) {
		logger.error("ERROR: getOrganizationById - ", error);

		if (error instanceof z.ZodError) {
			return res.status(400).json({ errors: error.errors });
		}

		res.status(500).json({ message: "Something went wrong" });
	}
}
