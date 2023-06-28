<h1 align="center">
	RetrieveTokens
	<a href="https://www.npmjs.org/package/microbundle"><img src="https://img.shields.io/npm/v/microbundle.svg?style=flat" alt="npm"></a> <a href="https://github.com"><img src="https://github.com/JUGG097/retrieveTokens/actions/workflows/main.yml/badge.svg" alt="github"></a>
</h1>
<p align="center">A <strong>simple package</strong> for interacting with <em> web client storages </em>like localStorage, bundled using <a href="https://github.com/developit/microbundle">Microbundle</a>.</p>
</p>

---

<p align="center">
  <strong>Guide → </strong>
  <a href="#setup">Installation</a> ✯
  <a href="#usage">Usage</a> ✯
</p>

---

## ✨ Features <a name="features"></a>

- Allow interaction with browser storages like `localStorage` and `sessionStorage` with calling them directly.
- Access and save multiple values to storages iterativel (in progress)

## 🔧 Installation & Setup <a name="setup"></a> <a name="installation"></a>

1️⃣ **Install** by running: `npm i retrieveTokens`

## 📦 Usage & Configuration <a name="usage"></a>

```js
// Using ES6 import syntax
import {retrieveValue} from 'retrieveTokens';

// Retrieve tokens from the local storage
// return null or value (as a string)
const token = retrieveValue("valueKey", "local");

// Retrieve tokens from the session storage
// return null or value (as a string)
const token = retrieveValue("valueKey", "session");
```