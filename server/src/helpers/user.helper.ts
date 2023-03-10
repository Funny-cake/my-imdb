import { IUserOutput } from "../db/models/user.model.js";

export function mapUser(user: IUserOutput): IUserOutput {
	return {
		id: user.id,
		name: user.name,
		email: user.email,
		createdAt: user.createdAt,
		lastLoginAt: user.lastLoginAt,
		updatedAt: user.updatedAt,
		blockedAt: user.blockedAt,
		deletedAt: user.deletedAt,
		roles: user.roles
	} as IUserOutput;
}