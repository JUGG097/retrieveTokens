import { addValue, deleteValue, retrieveValue } from "../src/index";

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
		localStorage.setItem("key1", "value");
		sessionStorage.setItem("key1", "value");

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
		localStorage.setItem("key1", "value");
		sessionStorage.setItem("key1", "value");

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
