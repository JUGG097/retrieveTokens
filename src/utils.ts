export interface retrieveValueInterface {
	(valueKey: string, storageType: storageOptions): string | null;
}

export interface retrieveValuesInterface {
	(valueKeys: string[], storageType: storageOptions): retrieveArrayObj;
}

export interface addValueInterface {
	(key: string, value: string, storageType: storageOptions): boolean;
}

export interface addValuesInterface {
	(keyValuePair: addArrayInputObj, storageType: storageOptions): addArrayResultObj;
}

export interface deleteValueInterface {
	(valueKey: string, storageType: storageOptions): boolean;
}

export interface deleteValuesInterface {
	(valueKeys: string[], storageType: storageOptions): addArrayResultObj;
}

export type storageOptions = "local" | "session";

export type retrieveArrayObj = {
	[key: string]: string | null;
};

export type addArrayResultObj = {
	[key: string]: boolean;
};

export type addArrayInputObj = {
	[key: string]: string;
};
