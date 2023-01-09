import { constants, promises } from "fs";
import { dirname } from "path";
import appRootPath from "app-root-path";

const read = constants.R_OK;
const write = constants.W_OK;

const getDescription = (mode: number = constants.R_OK) => {
    switch (mode) {
        case read | write:
            return "Read and Write";
        case read:
            return "Read";
        case write:
            return "Write";
    }
}

export const checkFileCanReadAsync = async (file: string): Promise<boolean> => await checkFileExistsAsync(file, read);

export const checkFileCanWriteAsync = async (file: string): Promise<boolean> => await checkFileExistsAsync(file, write);

export const checkFileCanReadAndWriteAsync = async (file: string): Promise<boolean> => await checkFileExistsAsync(file, read | write);

export const checkFileExistsAsync = async (file: string, mode: number): Promise<boolean> => {
    const result = await promises.access(file, mode)
        .then(() => {
            console.log(`File '${file}' has ${getDescription(mode)} access.`);
            return true;
        }).catch((err) => {
            console.error(`No ${getDescription(mode)} access to file '${file}'.`);
            return false;
        });
    return result;
}

export const getAppPath = async (): Promise<string> => {
	return appRootPath.path;
}