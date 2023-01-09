import * as movieDal from "../db/dal/movie.dal.js";
//import {GetAllIngredientsFilters} from '../dal/types'
import { IMovieInput, IMovieOutput } from "../db/models/movie.model.js";

export const createAsync = (payload: IMovieInput): Promise<IMovieOutput> => {
    return movieDal.createAsync(payload);
}

export const updateAsync = (id: number, payload: Partial<IMovieInput>): Promise<IMovieOutput> => {
    return movieDal.updateAsync(id, payload);
}

export const getByIdAsync = (id: number): Promise<IMovieOutput> => {
    return movieDal.getByIdAsync(id);
}

export const deleteByIdAsync = (id: number): Promise<boolean> => {
    return movieDal.deleteByIdAsync(id);
}

export const findAllAsync = (/*filters: GetAllIngredientsFilters*/): Promise<IMovieOutput[]> => {
    return movieDal.findAllAsync(/*filters*/);
}