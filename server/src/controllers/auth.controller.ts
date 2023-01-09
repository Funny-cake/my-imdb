import { getSaltedHash } from "../helpers/hash.helper.js";
import authConfig from "../config/auth.config.js";
import jwt from "jsonwebtoken";
import { mapUser } from "../helpers/user.helper.js";
import { Response, Request } from "express";
import { findAllAsync, updateAsync } from "../services/user.service.js";
import { IUserFilter } from "../models/filters.js";
import { IUserOutput } from "../db/models/user.model.js";

export function login(req: Request, res: Response) {
	console.log(req.body);

	const email = req.body.email;
	const password = req.body.password;

	if (email && password) {
		findAllAsync({
			email: email
		} as IUserFilter)
			.then(users => {
				if (users && users[0]) {
					const user = users[0];

					var salt = user.salt;
					var expected = user.hash;
					var actual = getSaltedHash(password, salt);

					console.log({ user, expected, actual });

					if (expected === actual) {
						console.log("1:",  user.id, authConfig.secret, token);

						var token = jwt.sign({ id: user.id }, authConfig.secret, {
							expiresIn: 86400 // 24 hours
						});

						console.log("2:",  user.id, authConfig.secret, token);

						user.lastLoginAt = new Date();

						updateAsync(user.id, user).then(() => {
							console.log(`User id=${user.id} saved successfully!`);
						})

						res.status(200).send({
							...mapUser(user),
							...{ accessToken: token }
						});
					} else {
						res.status(400).send({
							message: `Please check credentials.`
						});
					}
				} else {
					res.status(404).send({
						message: `Cannot find User with email=${email}.`
					});
				}
			})
			.catch((err) => {
				console.error(err);

				res.status(500).send({
					message: `Error retrieving User with email=${email}.`
				});
			});
	} else {
		res.status(400).send({
			message: `Response shouldn't be empty.`
		});
	}
};

export function logout(req: Request, res: Response) {
	findAllAsync({

	} as IUserFilter)
		.then((data: IUserOutput[]) => {
			res.send(data.map(mapUser));
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving Users."
			});
		});
};