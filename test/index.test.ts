import {
	addValue,
	addValues,
	deleteValue,
	deleteValues,
	retrieveValue,
	retrieveValues,
} from "../src/index";

const addValuesToStorage = () => {
	localStorage.setItem("key1", "value");
	localStorage.setItem("key2", "value2");
	sessionStorage.setItem("key1", "value");
	sessionStorage.setItem("key2", "value2");
};

describe("Tests for the retrieve, add and delete methods", () => {
	beforeEach(() => {
		localStorage.clear();
		sessionStorage.clear();
	});

	it("Null return for empty storages using retrieve method", async () => {
		const localValue = retrieveValue("key1", "local");
		const sessionValue = retrieveValue("key1", "session");

		expect(localValue).toBe(null);
		expect(sessionValue).toBe(null);
	});

	it("Return value using retrieve method with primed storages", async () => {
		// Set some values to storage
		addValuesToStorage();

		const localValue = retrieveValue("key1", "local");
		const sessionValue = retrieveValue("key1", "session");

		expect(localValue).toBe("value");
		expect(sessionValue).toBe("value");
	});

	it("Return true for empty storages using delete method", async () => {
		const localValue = deleteValue("key1", "local");
		const sessionValue = deleteValue("key1", "session");

		expect(localValue).toBe(true);
		expect(sessionValue).toBe(true);
	});

	it("Return true using delete method with primed storages", async () => {
		// Set some values to storage
		addValuesToStorage();

		const localValue = deleteValue("key1", "local");
		const sessionValue = deleteValue("key1", "session");

		expect(localValue).toBe(true);
		expect(sessionValue).toBe(true);
	});

	it("Return true for successful value addition", async () => {
		const localValue = addValue("key1", "value1", "local");
		const sessionValue = addValue("key1", "value1", "session");

		expect(localStorage.getItem("key1")).toBe("value1");
		expect(sessionStorage.getItem("key1")).toBe("value1");
		expect(localValue).toBe(true);
		expect(sessionValue).toBe(true);
	});
});

describe("Tests for the retrieve, add and delete methods with array and object inputs", () => {
	beforeEach(() => {
		localStorage.clear();
		sessionStorage.clear();
	});

	it("Null return for empty storages using retrieve method", async () => {
		const localValue = retrieveValues(["key1", "key2"], "local");
		const sessionValue = retrieveValues(["key1", "key2"], "session");

		expect(localValue.key1).toBe(null);
		expect(localValue.key2).toBe(null);
		expect(sessionValue.key1).toBe(null);
		expect(sessionValue.key2).toBe(null);
	});

	it("Return value using retrieve method with primed storages", async () => {
		// Set some values to storage
		addValuesToStorage();

		const localValue = retrieveValues(["key1", "key2"], "local");
		const sessionValue = retrieveValues(["key1", "key2"], "session");

		expect(localValue.key1).toBe("value");
		expect(localValue.key2).toBe("value2");
		expect(sessionValue.key1).toBe("value");
		expect(sessionValue.key2).toBe("value2");
	});

	it("Return true for empty storages using delete method", async () => {
		const localValue = deleteValues(["key1", "key2"], "local");
		const sessionValue = deleteValues(["key1", "key2"], "session");

		expect(localValue.key1).toBe(true);
		expect(localValue.key2).toBe(true);
		expect(sessionValue.key1).toBe(true);
		expect(sessionValue.key2).toBe(true);
	});

	it("Return true using delete method with primed storages", async () => {
		// Set some values to storage
		addValuesToStorage();

		const localValue = deleteValues(["key1", "key2"], "local");
		const sessionValue = deleteValues(["key1", "key2"], "session");

		expect(localValue.key1).toBe(true);
		expect(localValue.key2).toBe(true);
		expect(sessionValue.key1).toBe(true);
		expect(sessionValue.key2).toBe(true);
	});

	it("Return true for successful value addition", async () => {
		const localValue = addValues(
			{ key1: "value", key2: "value2" },
			"local"
		);
		const sessionValue = addValues(
			{ key1: "value", key2: "value2" },
			"session"
		);

		expect(localStorage.getItem("key1")).toBe("value");
		expect(sessionStorage.getItem("key1")).toBe("value");
		expect(localStorage.getItem("key2")).toBe("value2");
		expect(sessionStorage.getItem("key2")).toBe("value2");
		console.log(localValue);

		expect(localValue.key1).toBe(true);
		expect(localValue.key2).toBe(true);
		expect(sessionValue.key1).toBe(true);
		expect(sessionValue.key2).toBe(true);
	});
});
