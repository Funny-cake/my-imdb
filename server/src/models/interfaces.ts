export interface IUser {
	id: number;
	name: string;
	email: string;
	createdAt: Date;
	lastLoginAt: Date;
	roles: string[];
	blockedAt: Date;
	deletedAt: Date;
}