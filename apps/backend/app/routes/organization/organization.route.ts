import { Router } from "express";
import { getOrganizationById, updateOrganizationById } from "./organization.controller";
import { authMiddleware } from "@/app/middlewares/authMiddleware";

const router = Router();

router.get("/:id", authMiddleware, getOrganizationById);
router.put("/", authMiddleware, updateOrganizationById);

export const organizationRoute = router;
