import { Op } from 'sequelize';
import User, { IUserInput, IUserOutput } from '../models/user.model';
//import { GetAllIngredientsFilters } from './types';

export const createAsync = async (payload: IUserInput): Promise<IUserOutput> => {
    const ingredient = await User.create(payload)
    return ingredient
}

export const updateAsync = async (id: number, payload: Partial<IUserInput>): Promise<IUserOutput> => {
    const ingredient = await User.findByPk(id)
    if (!ingredient) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updatedIngredient = await (ingredient as User).update(payload)
    return updatedIngredient
}

export const getByIdAsync = async (id: number): Promise<IUserOutput> => {
    const ingredient = await User.findByPk(id)
    if (!ingredient) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return ingredient
}

export const deleteByIdAsync = async (id: number): Promise<boolean> => {
    const deletedIngredientCount = await User.destroy({
        where: { id }
    })
    return !!deletedIngredientCount
}

export const findAllAsync = async (/*filters?: GetAllIngredientsFilters*/): Promise<IUserOutput[]> => {
    return User.findAll(
    //     {
    //     where: {
    //         ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } })
    //     },
    //     ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
    // }
    );
}