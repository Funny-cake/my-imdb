import { Request, Response } from "express";
import { getAppPath } from "../services/file.service";
import path from "path";

export const home = (req: Request, res: Response, next: any) => {
    getAppPath()
        .then((appPath) => {
            res.sendFile(path.join(appPath, "client/dist", "index.html"));  
        });
};