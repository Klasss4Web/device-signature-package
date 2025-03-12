# **get-device-signature**

_A lightweight library to generate a unique device signature using browser attributes and SHA-256 hashing._

## **✨ Features**

✅ Generates a unique, consistent device signature  
✅ Uses SHA-256 hashing for security  
✅ Works in modern browsers  
✅ Zero dependencies

---

## **📦 Installation**

Install the package via npm:

```sh
npm install get-device-signature
```

## **🚀 Usage**

✅ Get a SHA-256 Hash of Any String

```
import { getHashedString } from "get-device-signature";

(async () => {
const hash = await getHashedString("Hello World");
console.log(hash); // Outputs a SHA-256 hashed string
})();

```

✅ 2. Generate a Unique Device Signature

```
import { getDeviceSignature } from "get-device-signature";

(async () => {
  const signature = await getDeviceSignature();
  console.log("Device Signature:", signature);
})();

```

This function collects browser attributes such as:

userAgent
platform
language
hardwareConcurrency
screenResolution
Then, it hashes them into a unique identifier.

## **🛠️ How It Works**

Collects browser attributes (User-Agent, OS, Screen Size, etc.).
Converts them into a JSON string.
Hashes the string using SHA-256.
Returns a unique device signature.
This makes it useful for identifying devices without tracking users.

## **📜 License**

This package is open-source under the MIT License.
