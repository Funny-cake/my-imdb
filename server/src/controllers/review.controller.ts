import { Response, Request } from "express";
import { IReviewOutput } from "../db/models/review.model.js";
import { findAllAsync } from "../services/review.service.js";
// import { mapReview } from "../helpers/review.helper.js";

export function findAll(req: Request, res: Response) {
	findAllAsync({
		userId: Number.parseInt(req.params.userId)
	})
		.then((data: IReviewOutput[]) => {
			res.send(data);
		})
		.catch((err: any) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving reviews."
			});
		});
};
