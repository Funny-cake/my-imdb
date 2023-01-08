import express, { Express } from "express";
import path from "path";
import pageRoutes from "./routes/page.routes.js";
import userRoutes from "./routes/user.routes.js";
import dbInit from './db/init.js'
import { getConstantsAsync } from "./services/constants.service.js";
import { getAppPath } from "./services/file.service.js";

dbInit();

const constants = await getConstantsAsync();
const appPath = await getAppPath();

console.log(appPath);

const app: Express = express();

app.use(express.static(path.join(appPath, "client/dist")));

pageRoutes(app);
userRoutes(app);

app.listen(constants.port, async () => {
	console.log(`[server]: Server is running at http://localhost:${constants.port}`);
});
