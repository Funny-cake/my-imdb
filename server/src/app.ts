import express, { Express, Request, Response } from "express";
import path from "path";
import { getConstantsAsync } from "./services/constants.service"
import pageRoutes from "./routes/page.routes";
import apiRoutes from "./routes/api.routes";
import userRoutes from "./routes/user.routes";

getConstantsAsync()
	.then(constants => {
		const app: Express = express();

		app.use(express.static(path.join(__dirname, "../client/dist")));

		pageRoutes(app);
		//apiRoutes(app);
		userRoutes(app);

		app.listen(constants.port, async () => {
			console.log(`[server]: Server is running at http://localhost:${constants.port}`);
		});
	})
	.catch(err => {
		console.error(err);
	});