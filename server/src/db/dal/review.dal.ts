import { Op } from "sequelize";
import { IReviewFilter } from "../../models/filters.js";
import Review, { IReviewInput, IReviewOutput } from "../models/review.model.js"

export const createAsync = async (payload: IReviewInput): Promise<IReviewOutput> => {
	const review = await Review.create(payload)
	return review
}

export const updateAsync = async (id: number, payload: Partial<IReviewInput>): Promise<IReviewOutput> => {
	const review = await Review.findByPk(id)
	if (!review) {
		throw new Error('not found')
	}
	const updatedreview = await (review as Review).update(payload)
	return updatedreview
}

export const getByIdAsync = async (id: number): Promise<IReviewOutput> => {
	const review = await Review.findByPk(id)
	if (!review) {
		throw new Error('not found')
	}
	return review
}

export const deleteByIdAsync = async (id: number): Promise<boolean> => {
	const deletedreviewCount = await Review.destroy({
		where: { id }
	})
	return !!deletedreviewCount
}

export const findAllAsync = async (filter?: IReviewFilter): Promise<IReviewOutput[]> => {
	filter = filter ?? {} as IReviewFilter;
	return Review.findAll(
		{
			where: {
				userId: {
					[Op.eq]: filter.userId
				}
			},
		}
	);
}