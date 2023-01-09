import * as reviewDal from "../db/dal/review.dal.js";
import { IReviewFilter } from '../models/filters.js';
import { IReviewInput, IReviewOutput } from "../db/models/review.model.js";

export const createAsync = (payload: IReviewInput): Promise<IReviewOutput> => {
    return reviewDal.createAsync(payload);
}

export const updateAsync = (id: number, payload: Partial<IReviewInput>): Promise<IReviewOutput> => {
    return reviewDal.updateAsync(id, payload);
}

export const getByIdAsync = (id: number): Promise<IReviewOutput> => {
    return reviewDal.getByIdAsync(id);
}

export const deleteByIdAsync = (id: number): Promise<boolean> => {
    return reviewDal.deleteByIdAsync(id);
}

export const findAllAsync = (filters?: IReviewFilter): Promise<IReviewOutput[]> => {
    return reviewDal.findAllAsync(filters);
}