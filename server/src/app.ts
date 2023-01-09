import express, { Express } from "express";
import path from "path";
import pageRoutes from "./routes/page.routes.js";
import userRoutes from "./routes/user.routes.js";
import movieRoutes from "./routes/movie.routes.js";
import revieRoutes from "./routes/review.routes.js";
import dbInit from './db/init.js'
import { getConstantsAsync } from "./services/constants.service.js";
import { getAppPath } from "./services/file.service.js";
import reviewRoutes from "./routes/review.routes.js";

dbInit();

const constants = await getConstantsAsync();
const appPath = await getAppPath();

console.log(appPath);

const app: Express = express();

app.use(express.static(path.join(appPath, "client/dist")));

pageRoutes(app);
userRoutes(app);
movieRoutes(app);
reviewRoutes(app);

app.listen(constants.port, async () => {
	console.log(`[server]: Server is running at http://localhost:${constants.port}`);
});
