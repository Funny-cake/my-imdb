import { Request, Response } from "express";
import { IUser } from "../models/interfaces";

export function findAll(req: Request, res: Response) {
	const users = [{
		name: "test",
		email: "test@test.com",
		createdAt: new Date(),
		//lastLoginAt: new Date()
	}, {
		name: "vas9",
		email: "vas9@test.com",
		createdAt: new Date(),
		//lastLoginAt: new Date()
	}] as IUser[]; 

	res.send(users);
};