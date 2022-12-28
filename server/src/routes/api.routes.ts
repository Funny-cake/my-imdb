import { Router, Express } from "express";
import { get } from "../controllers/api.controller.js";

const apiRoutes = (app: Express) => {
	var router = Router();

	router.get("*", get);

	app.use('/api', router);
};

export default apiRoutes;