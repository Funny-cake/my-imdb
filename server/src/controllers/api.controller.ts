import { Request, Response } from "express";
import { getConstantsAsync } from "../services/constants.service.js";

export const get = (req: Request, res: Response, next: any) => {
    getConstantsAsync()
        .then((constants) => {
            res.json({ message: `Hello from server running on ${constants.environment}!` });
        });
};