
import { Express, Router } from "express";
import { 
	//create, 
	findAll
	//, findOne, update, deleteUser, deleteAllUsers, blockUser, unblockUser, blockAllUsers, unblockAllUsers 
} from "../controllers/users.controller.js";

const userRoutes = (app: Express) => {
	var router = Router();

	//router.post("/", create);
	router.get("/", findAll);
	// router.get("/:id", [verifyToken], findOne);
	// router.put("/:id", [verifyToken], update);
	// router.delete("/:id", [verifyToken], deleteUser);
	// router.delete("/", [verifyToken], deleteAllUsers);
	// router.post("/block-all", blockAllUsers);
	// router.post("/unblock-all", unblockAllUsers);
	// router.post("/:id/block", blockUser);
	// router.post("/:id/unblock", unblockUser);

	app.use('/api/users', router);
};

export default userRoutes;