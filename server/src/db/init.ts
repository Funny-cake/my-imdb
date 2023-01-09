import User from "./models/user.model.js";
import seedUsersAsync from "./seeds/user.seed.js";
import seedMoviesAsync from "./seeds/movie.seed.js";
import Movie from "./models/movie.model.js";
import Review from "./models/review.model.js";
import initAssociations from "./associations/associations.js";
//const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
	Review.sync({ alter: true, force: true});

	User.sync({ alter: true, force: true })
		.then(seedUsersAsync)
		.then(() => {
			console.log("Users seeded successfully!");
		});
	Movie.sync({ alter: true, force: true })
		.then(seedMoviesAsync)
		.then(() => {
			console.log("Movies seeded successfully!");
		});

	initAssociations();
}

export default dbInit;