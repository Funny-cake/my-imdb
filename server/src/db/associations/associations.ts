import Review from "../models/review.model.js";
import User from "../models/user.model.js";
import Movie from "../models/movie.model.js";

const initAssociations = () => {
	User.hasMany(Review, {
		foreignKey: 'userId'
	});

	Movie.hasMany(Review, {
		foreignKey: 'movieId'
	});

	Review.belongsTo(User);
	Review.belongsTo(Movie);
}

export default initAssociations;