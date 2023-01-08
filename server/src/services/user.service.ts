import * as userDal from "../db/dal/user.dal.js";
//import {GetAllIngredientsFilters} from '../dal/types'
import { IUserInput, IUserOutput } from "../db/models/user.model.js";

export const createAsync = (payload: IUserInput): Promise<IUserOutput> => {
    return userDal.createAsync(payload);
}

export const updateAsync = (id: number, payload: Partial<IUserInput>): Promise<IUserOutput> => {
    return userDal.updateAsync(id, payload);
}

export const getByIdAsync = (id: number): Promise<IUserOutput> => {
    return userDal.getByIdAsync(id);
}

export const deleteByIdAsync = (id: number): Promise<boolean> => {
    return userDal.deleteByIdAsync(id);
}

export const findAllAsync = (/*filters: GetAllIngredientsFilters*/): Promise<IUserOutput[]> => {
    return userDal.findAllAsync(/*filters*/);
}