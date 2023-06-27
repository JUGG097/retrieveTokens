import {
	addValueInterface,
	removeValueInterface,
	retrieveValueInterface,
	storageOptions,
} from "./utils";

export const retrieveValue: retrieveValueInterface = (
	valueKey: string,
	storageType: storageOptions
) => {
	switch (storageType) {
		case "local":
			return localStorage.getItem(valueKey);
		case "session":
			return sessionStorage.getItem(valueKey);
		default:
			return null;
	}
};

export const addValue: addValueInterface = (
	key: string,
	value: string,
	storageType: storageOptions
) => {
	switch (storageType) {
		case "local":
			try {
				localStorage.setItem(key, value);
				return true;
			} catch (error) {
				return false;
			}

		case "session":
			try {
				sessionStorage.setItem(key, value);
				return true;
			} catch (error) {
				return false;
			}
		default:
			return false;
	}
};

export const deleteValue: removeValueInterface = (
	valueKey: string,
	storageType: storageOptions
) => {
	switch (storageType) {
		case "local":
			try {
				localStorage.removeItem(valueKey);
				return true;
			} catch (error) {
				return false;
			}
		case "session":
			try {
				sessionStorage.removeItem(valueKey);
				return true;
			} catch (error) {
				return false;
			}
		default:
			return false;
	}
};
