import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import sequelizeConnection from "../config.js";

interface IReview {
	id: number;
	name: string;
	text: string;
	rating: number;
	userId: number;
	movieId: number;
}

export interface IReviewInput extends Optional<IReview, 'id'> { }
export interface IReviewOutput extends Required<IReview> { }

class Review extends Model<IReview, IReviewInput> implements IReview {
	public id!: number;
	public name!: string;
	public text!: string;
	public rating!: number;
	public userId!: number;
	public movieId!: number;
}

Review.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING(255)
	},
	text: {
		type: DataTypes.STRING(5000)
	},
	rating: {
		type: DataTypes.INTEGER
	},
	userId: {
		type: DataTypes.INTEGER
	},
	movieId: {
		type: DataTypes.INTEGER
	}
}, {
	timestamps: true,
	sequelize: sequelizeConnection,
	paranoid: true
});

export default Review;