import httpService from "./http.service";
import { ILoginResult } from "../core/interfaces";
import { AxiosResponse } from "axios";

const baseURL = "/auth";

const key = "user";

class AuthService {
	login(email: string, password: string, remember: boolean): Promise<ILoginResult> {
		return httpService
			.post(`${baseURL}/login`, { email, password, remember })
			.then((response: AxiosResponse<ILoginResult>) => {
				if (response.data.accessToken) {
					localStorage.setItem(key, JSON.stringify(response.data));
				}
				return response.data;
			});
	}

	logout() {
		localStorage.removeItem(key);
	}

	currentUser() {
		return JSON.parse(localStorage.getItem(key));
	}
}

export default new AuthService();