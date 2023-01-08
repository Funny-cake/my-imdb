import { SHA3 } from "sha3";

export function getHash(text: string) {
	return new SHA3(256).update(text).digest('hex');
}

export function getSlatedHash(text: string, salt: string) {
	return getHash(`${text}_${salt}`);
}