import { Express, Router } from "express";
import { login, logout } from "../controllers/auth.controller.js";

const authRoutes = (app: Express) => {
	var router = Router();

	router.post("/login", login);

	router.post("/logout", logout);

	app.use('/api/auth', router);
};

export default authRoutes;