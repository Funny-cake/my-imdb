import { Router, Express } from "express";
import { home } from "../controllers/page.controller.js";

const pageRoutes = (app: Express) => {
	var router = Router();

	router.get("/", home);
	router.get("/home", home);
    router.get("/about", home);

	app.use('/', router);
};

export default pageRoutes;