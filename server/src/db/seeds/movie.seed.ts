import Movie from "../models/movie.model.js";

const seedMoviesAsync = async () => {
	await Movie.bulkCreate([
		{
			//id: 1,
			name: "The Shawshank Redemption",
			year: 1994,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			//id: 2,
			name: "The Godfather",
			year: 1972,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			//id: 3,
			name: "The Dark Knight",
			year: 2008,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			//id: 4,
			name: "12 Angry Men",
			year: 1957,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			//id: 5,
			name: "Schindler's List",
			year: 1993,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			//id: 6,
			name: "Pulp Fiction",
			year: 1994,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			//id: 7,
			name: "Il buono, il brutto, il cattivo",
			year: 1966,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			//id: 8,
			name: "Forrest Gump",
			year: 1994,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			//id: 9,
			name: "Fight Club",
			year: 1999,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			//id: 10,
			name: "Inception",
			year: 2010,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			//id: 11,
			name: "The Matrix",
			year: 1999,
			createdAt: new Date(),
			updatedAt: new Date()
		}
	]);
};

export default seedMoviesAsync;