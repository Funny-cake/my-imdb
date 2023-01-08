import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.config.js";

const verifyToken = (req: Request, res: Response, next: any) => {
    let token = "";
    const found = req.headers["x-access-token"];

    token = typeof found !== "string" ?  found[0] : found;

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, authConfig.secret, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }

        // req.userId = decoded.id;

        next();
    });
};

export default verifyToken;