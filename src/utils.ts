export interface retrieveValueInterface {
	(valueKey: string, storageType: storageOptions): string | null;
}

export interface addValueInterface {
    (key: string, value: string, storageType: storageOptions): boolean;
}

export interface removeValueInterface {
    (valueKey: string, storageType: storageOptions): boolean;
}

export type storageOptions = "local" | "session";
