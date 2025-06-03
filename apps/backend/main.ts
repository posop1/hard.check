/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import { httpLogger, logger } from "./libs";

export const app = express();

export const prisma = new PrismaClient();

dotenv.config();

const PORT = process.env.BACKEND_PORT || 3005;

app.use(cors());
app.use(express.json());
app.use(httpLogger);

const startServer = async () => {
	try {
		app.listen(PORT, () => {
			logger.info(`Server listening port:${PORT}`);
			logger.info(`Database URL: ${process.env.DATABASE_URL}`);
		});
	} catch (error) {
		logger.error(error);
	}
};

startServer();
