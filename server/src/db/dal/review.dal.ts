import { Op } from "sequelize";
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

export const findAllAsync = async (/*filters?: GetAllreviewsFilters*/): Promise<IReviewOutput[]> => {
    return Review.findAll(
    //     {
    //     where: {
    //         ...(filters?.isDeleted && { deletedAt: { [ .not]: null } })
    //     },
    //     ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
    // }
    );
}