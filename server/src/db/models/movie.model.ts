import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import sequelizeConnection from "../config.js";

interface IMovie {
	id: number;
	name: string;
	year: number;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;
}

export interface IMovieInput extends Optional<IMovie, 'id'> { }
export interface IMovieOutput extends Required<IMovie> { }

class Movie extends Model<IMovie, IMovieInput> implements IMovie {
	public id!: number;
	public name!: string;
	public year!: number;
	public createdAt!: Date;
	public updatedAt!: Date;
	public deletedAt!: Date;
}

Movie.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING(255)
	},
	year: {
		type: DataTypes.INTEGER
	},
	createdAt: {
		type: DataTypes.DATE
	},
	updatedAt: {
		type: DataTypes.DATE
	},
	deletedAt: {
		type: DataTypes.DATE
	},
}, {
	timestamps: true,
	sequelize: sequelizeConnection,
	paranoid: true
});

export default Movie;