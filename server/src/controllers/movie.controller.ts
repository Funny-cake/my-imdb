import { Response, Request } from "express";
import { IMovieOutput } from "../db/models/movie.model.js";
import { findAllAsync } from "../services/movie.service.js";
// import { mapMovie } from "../helpers/movie.helper.js";

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

// 	const movie = {
// 		name: req.body.name,
// 		email: req.body.email,
// 		registeredAt: date,
// 		salt: salt,
// 		hash: hash,
// 		updatedAt: date
// 	};

// 	db.movies.create(movie)
// 		.then((data) => {
// 			res.send(mapMovie(data));
// 		})
// 		.catch((err) => {
// 			res.status(500).send({
// 				message:
// 					err.message || "Some error occurred while creating the Movie."
// 			});
// 		});
// };

export function findAll(req: Request, res: Response) {
	findAllAsync()
		.then((data: IMovieOutput[]) => {
			//res.send(data.map(mapMovie));
			res.send(data);
		})
		.catch((err: any) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving Movies."
			});
		});
};


// export function findOne(req: Request, res: Response) {
// 	const id = req.params.id;

// 	db.movies.findByPk(id)
// 		.then(data => {
// 			if (data) {
// 				res.send(mapMovie(data));
// 			} else {
// 				res.status(404).send({
// 					message: `Cannot find Movie with id=${id}.`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error retrieving Movie with id=" + id
// 			});
// 		});
// };

// export function update(req: Request, res: Response) {
// 	const id = req.params.id;

// 	const data = { ...req.body, ...{ updatedAt: new Date() } };

// 	db.movies.update(data, {
// 		where: { id: id }
// 	})
// 		.then(num => {
// 			if (num == 1) {
// 				res.send({
// 					message: `Movie id=${id} was updated successfully.`
// 				});
// 			} else {
// 				res.send({
// 					message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error updating Movie with id=" + id
// 			});
// 		});
// };

// export function blockMovie(req: Request, res: Response) {
// 	const id = req.params.id;

// 	const date = new Date();

// 	db.movies.update({
// 		blockedAt: date,
// 		updatedAt: date
// 	}, {
// 		where: { id: id }
// 	})
// 		.then(num => {
// 			if (num == 1) {
// 				res.send({
// 					message: `Movie id=${id} was blocked successfully!`
// 				});
// 			} else {
// 				res.send({
// 					message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error updating Movie with id=" + id
// 			});
// 		});
// };

// export function blockAllMovies(req: Request, res: Response) {
// 	db.movies.findAll()
// 		.then(data => {
// 			const date = new Date();

// 			const promises = data.map(movie => {
// 				movie.blockedAt = date;
// 				movie.updatedAt = date;

// 				movie.save().then(() => {
// 					console.log(`Movie id=${movie.id} blocked successfully!`);
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
// 					err.message || "Some error occurred while retrieving Movies."
// 			});
// 		});
// };

// export function unblockMovie(req: Request, res: Response) {
// 	const id = req.params.id;

// 	db.movies.update({
// 		blockedAt: null,
// 		updatedAt: new Date()
// 	}, {
// 		where: { id: id }
// 	})
// 		.then(num => {
// 			if (num == 1) {
// 				res.send({
// 					message: `Movie id=${id} was updated successfully.`
// 				});
// 			} else {
// 				res.send({
// 					message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error updating Movie with id=" + id
// 			});
// 		});
// };

// export function unblockAllMovies(req: Request, res: Response) {
// 	db.movies.findAll()
// 		.then(data => {
// 			const date = new Date();

// 			const promises = data.map(movie => {
// 				movie.blockedAt = null;
// 				movie.updatedAt = date;

// 				movie.save().then(() => {
// 					console.log(`Movie id=${movie.id} unblocked successfully!`);
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
// 					err.message || "Some error occurred while retrieving Movies."
// 			});
// 		});
// };

// export function deleteMovie(req: Request, res: Response) {
// 	const id = req.params.id;

// 	const date = new Date();

// 	db.movies.update({
// 		deletedAt: date,
// 		updatedAt: date
// 	}, {
// 		where: { id: id }
// 	})
// 		.then(num => {
// 			if (num == 1) {
// 				res.send({
// 					message: `Movie id=${id} was deleted successfully!`
// 				});
// 			} else {
// 				res.send({
// 					message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error updating Movie with id=" + id
// 			});
// 		});
// };

// export function deleteAllMovies(req: Request, res: Response) {
// 	db.movies.findAll()
// 	.then(data => {
// 		const date = new Date();

// 		data.forEach(movie => {
// 			movie.deletedAt = date;
// 			movie.updatedAt = date;

// 			movie.save().then(() => {
// 				console.log(`Movie id=${movie.id} deleted successfully!`);
// 			})
// 		});
// 	})
// 	.catch(err => {
// 		res.status(500).send({
// 			message:
// 				err.message || "Some error occurred while retrieving Movies."
// 		});
// 	});
// };