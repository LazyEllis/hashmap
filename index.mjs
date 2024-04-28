import HashMap from "./hashmap.mjs";

// Create a new hashmap
const map = new HashMap();

// Set key-value pairs
map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");

// Get values by keys
console.log("Value for key1:", map.get("key1")); // Output: value1
console.log("Value for key2:", map.get("key2")); // Output: value2
console.log("Value for key3:", map.get("key3")); // Output: value3

// Check if keys exist
console.log("Does key1 exist?", map.has("key1")); // Output: true
console.log("Does key4 exist?", map.has("key4")); // Output: false

// Remove a key-value pair
map.remove("key2");

// Check if key2 was removed
console.log("Does key2 exist after removal?", map.has("key2")); // Output: false

// Print all keys and values
console.log("All keys:", map.keys()); // Output: ["key1", "key3"]
console.log("All values:", map.values()); // Output: ["value1", "value3"]

// Clear the hashmap
map.clear();

// Check if hashmap is empty after clearing
console.log("Is the hashmap empty?", map.length() === 0); // Output: true
