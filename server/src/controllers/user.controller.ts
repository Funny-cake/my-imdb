import { Response, Request } from "express";
import { IUserOutput } from "../db/models/user.model";
import { findAllAsync } from "../services/user.service";
// import { mapUser } from "../helpers/user.helper.js";

//import { getHash, getSlatedHash } from "../helpers/hash.helper.js";


// export function create(req: Request, res: Response) {
// 	if (!req.body.name || !req.body.email || !req.body.password) {
// 		res.status(400).send({
// 			message: "Content can not be empty!"
// 		});
// 		return;
// 	}

// 	const date = new Date();
// 	const salt = getHash(date.getTime().toString());
// 	const password = req.body.password;
// 	const hash = getSlatedHash(password, salt);

// 	const user = {
// 		name: req.body.name,
// 		email: req.body.email,
// 		registeredAt: date,
// 		salt: salt,
// 		hash: hash,
// 		updatedAt: date
// 	};

// 	db.users.create(user)
// 		.then((data) => {
// 			res.send(mapUser(data));
// 		})
// 		.catch((err) => {
// 			res.status(500).send({
// 				message:
// 					err.message || "Some error occurred while creating the User."
// 			});
// 		});
// };

export function findAll(req: Request, res: Response) {
	findAllAsync()
		.then((data: IUserOutput[]) => {
			//res.send(data.map(mapUser));
			res.send(data);
		})
		.catch((err: any) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving Users."
			});
		});
};


// export function findOne(req: Request, res: Response) {
// 	const id = req.params.id;

// 	db.users.findByPk(id)
// 		.then(data => {
// 			if (data) {
// 				res.send(mapUser(data));
// 			} else {
// 				res.status(404).send({
// 					message: `Cannot find User with id=${id}.`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error retrieving User with id=" + id
// 			});
// 		});
// };

// export function update(req: Request, res: Response) {
// 	const id = req.params.id;

// 	const data = { ...req.body, ...{ updatedAt: new Date() } };

// 	db.users.update(data, {
// 		where: { id: id }
// 	})
// 		.then(num => {
// 			if (num == 1) {
// 				res.send({
// 					message: `User id=${id} was updated successfully.`
// 				});
// 			} else {
// 				res.send({
// 					message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error updating User with id=" + id
// 			});
// 		});
// };

// export function blockUser(req: Request, res: Response) {
// 	const id = req.params.id;

// 	const date = new Date();

// 	db.users.update({
// 		blockedAt: date,
// 		updatedAt: date
// 	}, {
// 		where: { id: id }
// 	})
// 		.then(num => {
// 			if (num == 1) {
// 				res.send({
// 					message: `User id=${id} was blocked successfully!`
// 				});
// 			} else {
// 				res.send({
// 					message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error updating User with id=" + id
// 			});
// 		});
// };

// export function blockAllUsers(req: Request, res: Response) {
// 	db.users.findAll()
// 		.then(data => {
// 			const date = new Date();

// 			const promises = data.map(user => {
// 				user.blockedAt = date;
// 				user.updatedAt = date;

// 				user.save().then(() => {
// 					console.log(`User id=${user.id} blocked successfully!`);
// 				})
// 			});

// 			Promise
// 				.all(promises)
// 				.then(() => {
// 					res.status(200).send();
// 				});
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message:
// 					err.message || "Some error occurred while retrieving Users."
// 			});
// 		});
// };

// export function unblockUser(req: Request, res: Response) {
// 	const id = req.params.id;

// 	db.users.update({
// 		blockedAt: null,
// 		updatedAt: new Date()
// 	}, {
// 		where: { id: id }
// 	})
// 		.then(num => {
// 			if (num == 1) {
// 				res.send({
// 					message: `User id=${id} was updated successfully.`
// 				});
// 			} else {
// 				res.send({
// 					message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error updating User with id=" + id
// 			});
// 		});
// };

// export function unblockAllUsers(req: Request, res: Response) {
// 	db.users.findAll()
// 		.then(data => {
// 			const date = new Date();

// 			const promises = data.map(user => {
// 				user.blockedAt = null;
// 				user.updatedAt = date;

// 				user.save().then(() => {
// 					console.log(`User id=${user.id} unblocked successfully!`);
// 				})
// 			});

// 			Promise
// 				.all(promises)
// 				.then(() => {
// 					res.status(200).send();
// 				});
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message:
// 					err.message || "Some error occurred while retrieving Users."
// 			});
// 		});
// };

// export function deleteUser(req: Request, res: Response) {
// 	const id = req.params.id;

// 	const date = new Date();

// 	db.users.update({
// 		deletedAt: date,
// 		updatedAt: date
// 	}, {
// 		where: { id: id }
// 	})
// 		.then(num => {
// 			if (num == 1) {
// 				res.send({
// 					message: `User id=${id} was deleted successfully!`
// 				});
// 			} else {
// 				res.send({
// 					message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error updating User with id=" + id
// 			});
// 		});
// };

// export function deleteAllUsers(req: Request, res: Response) {
// 	db.users.findAll()
// 	.then(data => {
// 		const date = new Date();

// 		data.forEach(user => {
// 			user.deletedAt = date;
// 			user.updatedAt = date;

// 			user.save().then(() => {
// 				console.log(`User id=${user.id} deleted successfully!`);
// 			})
// 		});
// 	})
// 	.catch(err => {
// 		res.status(500).send({
// 			message:
// 				err.message || "Some error occurred while retrieving Users."
// 		});
// 	});
// };