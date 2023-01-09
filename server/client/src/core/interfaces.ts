export interface ILoginResult {
	accessToken: string;
}

export interface IUser {
	id: number;
	name: string;
	email: string;
	createdAt: Date;
	lastLoginAt: Date;
	roles: string;
	blockedAt: Date;
	deletedAt: Date;
}

export interface IUsersPageState {
	users: IUser[]
}

export interface IUsersPageProps {
	users: IUser[],

}
export interface IApplicationState {
	users: IUser[],
}