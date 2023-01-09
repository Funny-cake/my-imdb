import { Op } from "sequelize";
import Movie, { IMovieInput, IMovieOutput } from "../models/movie.model.js"

export const createAsync = async (payload: IMovieInput): Promise<IMovieOutput> => {
    const movie = await Movie.create(payload)
    return movie
}

export const updateAsync = async (id: number, payload: Partial<IMovieInput>): Promise<IMovieOutput> => {
    const movie = await Movie.findByPk(id)
    if (!movie) {
        throw new Error('not found')
    }
    const updatedmovie = await (movie as Movie).update(payload)
    return updatedmovie
}

export const getByIdAsync = async (id: number): Promise<IMovieOutput> => {
    const movie = await Movie.findByPk(id)
    if (!movie) {
        throw new Error('not found')
    }
    return movie
}

export const deleteByIdAsync = async (id: number): Promise<boolean> => {
    const deletedmovieCount = await Movie.destroy({
        where: { id }
    })
    return !!deletedmovieCount
}

export const findAllAsync = async (/*filters?: GetAllmoviesFilters*/): Promise<IMovieOutput[]> => {
    return Movie.findAll(
    //     {
    //     where: {
    //         ...(filters?.isDeleted && { deletedAt: { [ .not]: null } })
    //     },
    //     ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
    // }
    );
}