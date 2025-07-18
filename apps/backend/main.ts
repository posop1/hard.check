/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import { httpLogger, logger } from "./libs";
import { authRouter } from "./app/routes/auth";
import { organizationRoute } from "./app/routes/organization";
import { testRoute } from "./app/routes/test";
import { questionRoute } from "./app/routes/question";

export const app = express();

export const prisma = new PrismaClient();

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
app.use(httpLogger);

app.use("/auth", authRouter);
app.use("/organization", organizationRoute);
app.use("/test", testRoute);
app.use("/question", questionRoute);

// TODO подумать над безопасностью, сейчас пользователь из другой орги может удалять тесты другой
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
