# HashMap

This repository contains implementations of a HashMap data structure in JavaScript. The HashMap consists of three main components:

1. **Node**: Represents a node in a linked list.
2. **LinkedList**: Represents a linked list data structure used in the HashMap.
3. **HashMap**: Represents the HashMap data structure, which utilizes linked lists for collision resolution.

## Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Introduction

A hashmap, also known as a hash table, is a data structure that implements an associative array abstract data type, a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

## Usage

To use this hashmap implementation in your project, simply import the provided class into your JavaScript file:

```javascript
import HashMap from "./hashmap.mjs";

// Create a new hashmap instance
const map = new HashMap();

// Set key-value pairs
map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");

// Get values by keys
console.log("Value for key1:", map.get("key1")); // Output: value1
console.log("Value for key2:", map.get("key2")); // Output: value2
console.log("Value for key3:", map.get("key3")); // Output: value3
```

## API Reference

### `HashMap`

#### `constructor()`

Creates a new hashmap.

#### `set(key, value)`

Sets a key-value pair in the hashmap.

#### `get(key)`

Retrieves the value associated with the given key.

#### `has(key)`

Checks if the hashmap contains the given key.

#### `remove(key)`

Removes the key-value pair with the given key from the hashmap.

#### `length()`

Returns the total number of key-value pairs in the hashmap.

#### `clear()`

Clears all key-value pairs from the hashmap.

#### `keys()`

Retrieves an array containing all keys in the hashmap.

#### `values()`

Retrieves an array containing all values in the hashmap.

#### `entries()`

Retrieves an array containing all key-value pairs in the hashmap.

## Example

```javascript
// Create a new hashmap instance
const map = new HashMap();

// Set key-value pairs
map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");

// Check if keys exist
console.log("Does key1 exist?", map.has("key1")); // Output: true
console.log("Does key4 exist?", map.has("key4")); // Output: false

// Remove a key-value pair
map.remove("key2");

// Check if key2 was removed
console.log("Does key2 exist after removal?", map.has("key2")); // Output: false
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
