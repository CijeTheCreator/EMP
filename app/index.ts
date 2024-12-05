import express, { Express } from "express";
import cors from "cors";

import dotenv from "dotenv";
import path from "path";
import AppConstants from "./utils/constants";
import logger from "./utils/logger";

const configPath = path.join(__dirname, "../config");

const envFile =
  process.env.NODE_ENV === AppConstants.Environments.production
    ? ".env.production"
    : ".env.development";

dotenv.config({ path: path.join(configPath, envFile) });

const PORT = process.env.PORT || 8000;

const app: Express = express();
app.use(cors());

app.listen(PORT, () => {
  logger.info(`[SERVER] Running at http://localhost:${PORT}`);
});
