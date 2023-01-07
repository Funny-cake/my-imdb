import {
	CREATE_USER,
	RETRIEVE_USERS,
	UPDATE_USER,
	UPDATE_ALL_USERS,
	DELETE_USER,
	DELETE_ALL_USERS
} from "./types";

import UserDataService from "../services/user.service";
import { IUser} from "../core/interfaces";

export const createUser = (name: string, email: string, password: string) => async (dispatch: any) => {
	try {
		const res = await UserDataService.create({ name, email, password });

		dispatch({
			type: CREATE_USER,
			payload: res.data,
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const retrieveUsers = () => async (dispatch: any) => {
	try {
		const res = await UserDataService.getAll();

		dispatch({
			type: RETRIEVE_USERS,
			payload: res.data,
		});

	} catch (err) {
		console.log(err);
	}
};

export const updateUser = (id: number, data: IUser) => async (dispatch: any) => {
	try {
		const res = await UserDataService.update(id, data);

		dispatch({
			type: UPDATE_USER,
			payload: data,
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const blockUser = (id: number) => async (dispatch: any) => {
	try {
		const res = await UserDataService.blockUser(id);

		console.log(res);

		dispatch({
			type: UPDATE_USER,
			payload: res.data,
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const blockAllUsers = () => async (dispatch: any) => {
	try {
		const res = await UserDataService.blockAllUsers();

		dispatch({
			type: UPDATE_ALL_USERS,
			payload: res.data,
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const unblockUser = (id: number) => async (dispatch: any) => {
	try {
		const res = await UserDataService.unblockUser(id);

		dispatch({
			type: UPDATE_USER,
			payload: res.data,
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const unblockAllUsers = () => async (dispatch: any) => {
	try {
		const res = await UserDataService.unblockAllUsers();

		dispatch({
			type: UPDATE_ALL_USERS ,
			payload: res.data,
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export const deleteUser = (id: number) => async (dispatch: any) => {
	try {
		await UserDataService.delete(id);

		dispatch({
			type: DELETE_USER,
			payload: { id },
		});
	} catch (err) {
		console.log(err);
	}
};

export const deleteAllUsers = () => async (dispatch: any) => {
	try {
		const res = await UserDataService.deleteAll();

		dispatch({
			type: DELETE_ALL_USERS,
			payload: [],
		});

		return Promise.resolve(res.data);
	} catch (err) {
		return Promise.reject(err);
	}
};