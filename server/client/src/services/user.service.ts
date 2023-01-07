import apiClient from "./http.service";
import getAuthHeader from "./authHeader.service";
import { IUser } from "../core/interfaces";

const baseURL = "/users";

class UserDataService {
	getAll() {
		return apiClient.get(baseURL, { headers: getAuthHeader() });
	}

	get(id: number) {
		return apiClient.get(`${baseURL}/${id}`, { headers: getAuthHeader() });
	}

	create(data: any) {
		return apiClient.post(baseURL, data);
	}

	update(id: number, data: IUser) {
		return apiClient.put(`${baseURL}/${id}`, data, { headers: getAuthHeader() });
	}

	delete(id: number) {
		return apiClient.delete(`${baseURL}/${id}`, { headers: getAuthHeader() });
	}

	deleteAll() {
		return apiClient.delete(baseURL, { headers: getAuthHeader() });
	}

	blockUser(id: number) {
		return apiClient.post(`${baseURL}/${id}/block`, { headers: getAuthHeader() });
	}

	unblockUser(id: number) {
		return apiClient.post(`${baseURL}/${id}/unblock`, { headers: getAuthHeader() });
	}

	blockAllUsers() {
		return apiClient.post(`${baseURL}/block-all`, { headers: getAuthHeader() });
	}

	unblockAllUsers() {
		return apiClient.post(`${baseURL}/unblock-all`, { headers: getAuthHeader() });
	}
}

export default new UserDataService();