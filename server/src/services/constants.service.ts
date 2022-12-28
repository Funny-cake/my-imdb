import getDotEnvAsync from "./dotenv.service";
import { IConstants } from "../core/interfaces";

let constants: IConstants;

export const getConstantsAsync = async (): Promise<IConstants> => {
    if (!constants) {
        const dotenvConfig = await getDotEnvAsync();
        constants = {
            environment: process.env.CURRENT_ENVIRONMENT ?? dotenvConfig.parsed?.CURRENT_ENVIRONMENT ?? "N/A",
            port: process.env.PORT ?? dotenvConfig.parsed?.PORT ?? "8080"
        } as IConstants;
    }
    return constants;
}