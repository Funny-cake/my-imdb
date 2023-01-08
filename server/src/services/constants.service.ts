import getDotEnvAsync from "./dotenv.service.js";
import { IConstants } from "../core/interfaces.js";
import { Dialect } from "sequelize";

let constants: IConstants;

export const getConstantsAsync = async (): Promise<IConstants> => {
    if (!constants) {
        const dotenvConfig = await getDotEnvAsync();
        const parsed = dotenvConfig.parsed;
        constants = {
            environment: process.env.CURRENT_ENVIRONMENT ?? parsed.CURRENT_ENVIRONMENT ?? "N/A",
            port: process.env.PORT ?? parsed.PORT ?? "8080",
            dbName: process.env.DB_NAME ?? parsed.dbName,
            dbUser: process.env.DB_USER ?? parsed.dbUser,
            dbHost: process.env.DB_HOST ?? parsed.dbHost,
            dbDriver: (process.env.DB_DRIVER ?? parsed.dbDriver) as Dialect,
            dbPassword: process.env.DB_PASSWORD ?? parsed.dbPassword, 
        } as IConstants;
    }
    return constants;
}