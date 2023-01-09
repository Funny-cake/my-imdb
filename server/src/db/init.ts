import User from "./models/user.model.js";
import seedUsersAsync from "./seeds/user.seed.js";
import seedMoviesAsync from "./seeds/movie.seed.js";
import Movie from "./models/movie.model.js";
import Review from "./models/review.model.js";
import initAssociations from "./associations/associations.js";
import { faker } from "@faker-js/faker";
import { Sequelize } from "sequelize";
//const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
	Review.sync({ alter: true, force: true })
		.then(async () => await User.sync({ alter: true, force: true }))
		.then(seedUsersAsync)
		.then(() => {
			console.log("Users seeded successfully!");
		})
		.then(async () => await Movie.sync({ alter: true, force: true }))
		.then(seedMoviesAsync)
		.then(() => {
			console.log("Movies seeded successfully!");
		})
		.then(async () => {
			const users = await User.findAll();
			const movies = await Movie.findAll();

			let reviews = new Array<Review>();

			users.forEach(user => {
				movies.forEach(movie => {
					if (Math.random() > 0.3) {
						reviews.push({
							id: null,
							name: faker.word.adjective(),
							text: faker.lorem.paragraph(),
							rating: Math.floor(Math.random() * 5) + 1,
							userId: user.id,
							movieId: movie.id,
							createdAt: faker.date.between(new Date(2015, 1, 1), new Date())
						} as Review);
					}
				});
			});

			Review.bulkCreate(
				reviews
			);
		})
		.then(() => {
			console.log("Reviews seeded successfully!");
		})
		.then(() => {
			initAssociations();
		});
}

export default dbInit;