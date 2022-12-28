import dotenv from "dotenv";
import path from "path";
import * as fileService from "./file.service";

const getDotEnvAsync = async (): Promise<dotenv.DotenvConfigOutput> => {
    const rootPath = await fileService.getAppPath();
    const envPath = path.join(rootPath, ".env");

    const dotenvOptions: dotenv.DotenvConfigOptions = {
        path: envPath,
        encoding: "latin1"
    }
    return await fileService.checkFileCanReadAsync(envPath) ? dotenv.config(dotenvOptions) : {} as dotenv.DotenvConfigOutput;
}
export default getDotEnvAsync;
