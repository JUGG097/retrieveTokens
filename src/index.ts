import {
	addValueInterface,
	deleteValueInterface,
	retrieveValueInterface,
	retrieveValuesInterface,
	storageOptions,
	addValuesInterface,
	addArrayInputObj,
	addArrayResultObj,
	retrieveArrayObj,
	deleteValuesInterface,
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

export const retrieveValues: retrieveValuesInterface = (
	valueKeys: string[],
	storageType: storageOptions
) => {
	let result_obj: retrieveArrayObj = {};
	valueKeys.forEach((element) => {
		result_obj[element] = retrieveValue(element, storageType);
	});
	return result_obj;
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

export const addValues: addValuesInterface = (
	keyValuePair: addArrayInputObj,
	storageType: storageOptions
) => {
	let result_obj: addArrayResultObj = {};
	for (const key in keyValuePair) {
		result_obj[key] = addValue(key, keyValuePair[key], storageType);
	}
	return result_obj;
};

export const deleteValue: deleteValueInterface = (
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

export const deleteValues: deleteValuesInterface = (
	valueKeys: string[],
	storageType: storageOptions
) => {
	let result_obj: addArrayResultObj = {};
	valueKeys.forEach((element) => {
		result_obj[element] = deleteValue(element, storageType);
	});
	return result_obj;
};
