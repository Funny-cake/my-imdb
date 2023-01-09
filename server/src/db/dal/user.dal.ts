import { Op } from "sequelize";
import User, { IUserInput, IUserOutput } from "../models/user.model.js"
//import { GetAllusersFilters } from './types';

export const createAsync = async (payload: IUserInput): Promise<IUserOutput> => {
    const user = await User.create(payload)
    return user
}

export const updateAsync = async (id: number, payload: Partial<IUserInput>): Promise<IUserOutput> => {
    const user = await User.findByPk(id)
    if (!user) {
        throw new Error('not found')
    }
    const updateduser = await (user as User).update(payload)
    return updateduser
}

export const getByIdAsync = async (id: number): Promise<IUserOutput> => {
    const user = await User.findByPk(id)
    if (!user) {
        throw new Error('not found')
    }
    return user
}

export const deleteByIdAsync = async (id: number): Promise<boolean> => {
    const deleteduserCount = await User.destroy({
        where: { id }
    })
    return !!deleteduserCount
}

export const findAllAsync = async (/*filters?: GetAllusersFilters*/): Promise<IUserOutput[]> => {
    return User.findAll(
    //     {
    //     where: {
    //         ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } })
    //     },
    //     ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
    // }
    );
}