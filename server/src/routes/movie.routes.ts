import { Express, Router } from "express";
import {
     //create,
      findAll, 
      //findOne, update, deleteMovie, deleteAllMovies, blockMovie, unblockMovie, blockAllMovies, unblockAllMovies 
    } from "../controllers/movie.controller.js";
//import verifyToken from "../middleware/auth-jwt.js";

const movieRoutes = (app: Express) => {
	var router = Router();

    router.get("/", findAll);

	// router.post("/", create);
	// router.get("/", [verifyToken], findAll);
	// router.get("/:id", [verifyToken], findOne);
	// router.put("/:id", [verifyToken], update);
	// router.delete("/:id", [verifyToken], deleteMovie);
	// router.delete("/", [verifyToken], deleteAllMovies);
	// router.post("/block-all", blockAllMovies);
	// router.post("/unblock-all", unblockAllMovies);
	// router.post("/:id/block", blockMovie);
	// router.post("/:id/unblock", unblockMovie);

	app.use('/api/movies', router);
};

export default movieRoutes;