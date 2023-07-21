<h1 align="center">
	RetrieveTokens
	<a href="https://www.npmjs.com/package/retrievetokens"><img src="https://img.shields.io/npm/v/retrievetokens.svg?style=flat" alt="npm"></a> <a href="https://github.com"><img src="https://github.com/JUGG097/retrieveTokens/actions/workflows/main.yml/badge.svg" alt="github"></a>
</h1>
<p align="center">A <strong>simple package</strong> for interacting with <em> web client storages </em>like localStorage, bundled using <a href="https://github.com/developit/microbundle">Microbundle</a>.</p>
</p>

---
<p align="center">
  <strong>Guide → </strong>
  <a href="#setup">Installation</a> ✯
  <a href="#usage">Usage</a> ✯
  <a href="#release">Release</a> ✯
</p>

---

## ✨ Features <a name="features"></a>

- Allow interaction with browser storages like `localStorage` and `sessionStorage` with calling them directly.
- Access and save multiple values to storages iteratively (in progress)

## 🔧 Installation & Setup <a name="setup"></a> <a name="installation"></a>

- **Install** by running: `npm i retrievetokens`

## 📦 Usage & Configuration <a name="usage"></a>

- Fetch key:value stored in storage
```js
// Using ES6 import syntax
import {retrieveValue, retrieveValues} from 'retrievetokens';

// Retrieve token from the local storage
// returns null or value (as a string)
const token = retrieveValue("valueKey", "local");
const tokenObj = retrieveValues(["key1", "key2"], "local");

// Retrieve token from the session storage
// returns null or value (as a string)
const token = retrieveValue("valueKey", "session");
const tokenObj = retrieveValues(["key1", "key2"], "session");
```

- Store key:value pair in storage
```js
// Using ES6 import syntax
import {addValue, addValues} from 'retrievetokens';

// Store token in the local storage
// returns true or false (if it fails to store)
const token = addValue("key", "value", "local");
const tokenObj = addValues({ key1: "value", key2: "value2" }, "local");

// Store token in the session storage
// returns true or false (if it fails to store)
const token = addValue("key", "value", "session");
const tokenObj = addValues({ key1: "value", key2: "value2" }, "session");
```

- Delete stored key:value pair from storage
```js
// Using ES6 import syntax
import {deleteValue, deleteValues} from 'retrievetokens';

// Delete token from the local storage
// returns true or false (if it fails to delete)
const token = deleteValue("valueKey", "local");
const tokenObj = deleteValues(["key1", "key2"], "local");

// Delete token from the session storage
// returns true or false (if it fails to delete)
const token = deleteValue("valueKey", "session");
const tokenObj = deleteValues(["key1", "key2"], "session");
```

## 📦 Releases <a name="release"></a>
- Tag the latest commit for release
- Initiate release manually on Github
