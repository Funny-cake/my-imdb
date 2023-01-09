import httpService from "./http.service";
import { ILoginResult } from "../core/interfaces";
import { AxiosResponse } from "axios";
import { IUser } from "../core/interfaces";

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

	isAdmin(): boolean {
		return this.roles().indexOf("admin") > -1;
	}

	isUser(): boolean {
		return this.roles().indexOf("user") > -1;
	}

	logout(): void {
		localStorage.removeItem(key);
	}

	roles(): string[] {
		const cu = this.currentUser();
		return cu && cu.roles ? cu.roles.split(",") : [];
	}

	isInRole(role: "admin" | "user"): boolean {
		return this.roles().indexOf(role) > -1;
	}

	currentUser(): IUser {
		return JSON.parse(localStorage.getItem(key));
	}
}

export default new AuthService();