import { Response, Request } from "express";
import { IUserOutput } from "../db/models/user.model.js";
import { findAllAsync } from "../services/user.service.js";
import { mapUser } from "../helpers/user.helper.js";
import { getHash, getSaltedHash } from "../helpers/hash.helper.js";

export function findAll(req: Request, res: Response) {
	findAllAsync()
		.then((data: IUserOutput[]) => {
			res.send(data.map(mapUser));
		})
		.catch((err: any) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving Users."
			});
		});
};
