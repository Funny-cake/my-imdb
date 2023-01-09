import { Response, Request } from "express";
import { IReviewOutput } from "../db/models/review.model.js";
import { findAllAsync } from "../services/review.service.js";
// import { mapReview } from "../helpers/review.helper.js";

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

// 	const review = {
// 		name: req.body.name,
// 		email: req.body.email,
// 		registeredAt: date,
// 		salt: salt,
// 		hash: hash,
// 		updatedAt: date
// 	};

// 	db.reviews.create(review)
// 		.then((data) => {
// 			res.send(mapReview(data));
// 		})
// 		.catch((err) => {
// 			res.status(500).send({
// 				message:
// 					err.message || "Some error occurred while creating the Review."
// 			});
// 		});
// };

export function findAll(req: Request, res: Response) {
	findAllAsync()
		.then((data: IReviewOutput[]) => {
			//res.send(data.map(mapReview));
			res.send(data);
		})
		.catch((err: any) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving Reviews."
			});
		});
};


// export function findOne(req: Request, res: Response) {
// 	const id = req.params.id;

// 	db.reviews.findByPk(id)
// 		.then(data => {
// 			if (data) {
// 				res.send(mapReview(data));
// 			} else {
// 				res.status(404).send({
// 					message: `Cannot find Review with id=${id}.`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error retrieving Review with id=" + id
// 			});
// 		});
// };

// export function update(req: Request, res: Response) {
// 	const id = req.params.id;

// 	const data = { ...req.body, ...{ updatedAt: new Date() } };

// 	db.reviews.update(data, {
// 		where: { id: id }
// 	})
// 		.then(num => {
// 			if (num == 1) {
// 				res.send({
// 					message: `Review id=${id} was updated successfully.`
// 				});
// 			} else {
// 				res.send({
// 					message: `Cannot update Review with id=${id}. Maybe Review was not found or req.body is empty!`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error updating Review with id=" + id
// 			});
// 		});
// };

// export function blockReview(req: Request, res: Response) {
// 	const id = req.params.id;

// 	const date = new Date();

// 	db.reviews.update({
// 		blockedAt: date,
// 		updatedAt: date
// 	}, {
// 		where: { id: id }
// 	})
// 		.then(num => {
// 			if (num == 1) {
// 				res.send({
// 					message: `Review id=${id} was blocked successfully!`
// 				});
// 			} else {
// 				res.send({
// 					message: `Cannot update Review with id=${id}. Maybe Review was not found or req.body is empty!`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error updating Review with id=" + id
// 			});
// 		});
// };

// export function blockAllReviews(req: Request, res: Response) {
// 	db.reviews.findAll()
// 		.then(data => {
// 			const date = new Date();

// 			const promises = data.map(review => {
// 				review.blockedAt = date;
// 				review.updatedAt = date;

// 				review.save().then(() => {
// 					console.log(`Review id=${review.id} blocked successfully!`);
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
// 					err.message || "Some error occurred while retrieving Reviews."
// 			});
// 		});
// };

// export function unblockReview(req: Request, res: Response) {
// 	const id = req.params.id;

// 	db.reviews.update({
// 		blockedAt: null,
// 		updatedAt: new Date()
// 	}, {
// 		where: { id: id }
// 	})
// 		.then(num => {
// 			if (num == 1) {
// 				res.send({
// 					message: `Review id=${id} was updated successfully.`
// 				});
// 			} else {
// 				res.send({
// 					message: `Cannot update Review with id=${id}. Maybe Review was not found or req.body is empty!`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error updating Review with id=" + id
// 			});
// 		});
// };

// export function unblockAllReviews(req: Request, res: Response) {
// 	db.reviews.findAll()
// 		.then(data => {
// 			const date = new Date();

// 			const promises = data.map(review => {
// 				review.blockedAt = null;
// 				review.updatedAt = date;

// 				review.save().then(() => {
// 					console.log(`Review id=${review.id} unblocked successfully!`);
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
// 					err.message || "Some error occurred while retrieving Reviews."
// 			});
// 		});
// };

// export function deleteReview(req: Request, res: Response) {
// 	const id = req.params.id;

// 	const date = new Date();

// 	db.reviews.update({
// 		deletedAt: date,
// 		updatedAt: date
// 	}, {
// 		where: { id: id }
// 	})
// 		.then(num => {
// 			if (num == 1) {
// 				res.send({
// 					message: `Review id=${id} was deleted successfully!`
// 				});
// 			} else {
// 				res.send({
// 					message: `Cannot update Review with id=${id}. Maybe Review was not found or req.body is empty!`
// 				});
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).send({
// 				message: "Error updating Review with id=" + id
// 			});
// 		});
// };

// export function deleteAllReviews(req: Request, res: Response) {
// 	db.reviews.findAll()
// 	.then(data => {
// 		const date = new Date();

// 		data.forEach(review => {
// 			review.deletedAt = date;
// 			review.updatedAt = date;

// 			review.save().then(() => {
// 				console.log(`Review id=${review.id} deleted successfully!`);
// 			})
// 		});
// 	})
// 	.catch(err => {
// 		res.status(500).send({
// 			message:
// 				err.message || "Some error occurred while retrieving Reviews."
// 		});
// 	});
// };