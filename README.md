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

- **Install** by running: `npm i retrieveTokens`

## 📦 Usage & Configuration <a name="usage"></a>

- Fetch key:value stored in storage
```js
// Using ES6 import syntax
import {retrieveValue} from 'retrieveTokens';

// Retrieve token from the local storage
// returns null or value (as a string)
const token = retrieveValue("valueKey", "local");

// Retrieve token from the session storage
// returns null or value (as a string)
const token = retrieveValue("valueKey", "session");
```

- Store key:value pair in storage
```js
// Using ES6 import syntax
import {addValue} from 'retrieveTokens';

// Store token in the local storage
// returns true or false (if it fails to store)
const token = addValue("key", "value", "local");

// Store token in the session storage
// returns true or false (if it fails to store)
const token = addValue("key", "value", "session");
```

- Delete stored key:value pair from storage
```js
// Using ES6 import syntax
import {deleteValue} from 'retrieveTokens';

// Delete token from the local storage
// returns true or false (if it fails to delete)
const token = deleteValue("valueKey", "local");

// Delete token from the session storage
// returns true or false (if it fails to delete)
const token = deleteValue("valueKey", "session");
```

## 📦 Releases <a name="release"></a>
- Tag the latest commit for release
- Initiate release manually on Github
