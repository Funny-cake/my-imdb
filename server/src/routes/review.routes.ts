import { Express, Router } from "express";
import {
     //create,
      findAll, 
      //findOne, update, deleteReview, deleteAllReviews, blockReview, unblockReview, blockAllReviews, unblockAllReviews 
    } from "../controllers/review.controller.js";
//import verifyToken from "../middleware/auth-jwt.js";

const reviewRoutes = (app: Express) => {
	var router = Router();

    router.get("/", findAll);
    router.get("/:userId", findAll);

	// router.post("/", create);
	// router.get("/", [verifyToken], findAll);
	// router.get("/:id", [verifyToken], findOne);
	// router.put("/:id", [verifyToken], update);
	// router.delete("/:id", [verifyToken], deleteReview);
	// router.delete("/", [verifyToken], deleteAllReviews);
	// router.post("/block-all", blockAllReviews);
	// router.post("/unblock-all", unblockAllReviews);
	// router.post("/:id/block", blockReview);
	// router.post("/:id/unblock", unblockReview);

	app.use('/api/reviews', router);
};

export default reviewRoutes;