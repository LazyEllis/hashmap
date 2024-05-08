import LinkedList from "./linked-list.js";

/**
 * Class representing a hashmap data structure.
 */
class HashMap {
  /**
   * Create a new HashMap.
   */
  constructor() {
    // Initialize each bucket in the hashmap with a linked list
    for (let hash = 0; hash < this.#capacity; hash++) {
      this[hash] = new LinkedList();
    }
  }

  /**
   * The initial capacity of the hashmap.
   * @type {number}
   */
  #capacity = 16;

  /**
   * The load factor threshold for resizing the hashmap.
   * @type {number}
   */
  #loadFactor = 0.75;

  /**
   * Doubles the capacity of the hashmap and rehashes all key-value pairs.
   */
  #growHashMap() {
    if (this.length() >= this.#loadFactor * this.#capacity) {
      const entries = this.entries();
      this.#capacity *= 2;

      // Create new buckets and rehash all entries
      for (let hash = 0; hash < this.#capacity; hash++) {
        this[hash] = new LinkedList();
      }

      entries.forEach((entry) => {
        this.set(entry[0], entry[1]);
      });
    }
  }

  /**
   * Halves the capacity of the hashmap and rehashes all key-value pairs.
   */
  #shrinkHashMap() {
    if (this.#capacity === 16) return;

    if (this.length() < this.#loadFactor * (this.#capacity / 2)) {
      const entries = this.entries();
      this.#capacity /= 2;

      // Create new buckets and rehash all entries
      for (let hash = 0; hash < this.#capacity; hash++) {
        this[hash] = new LinkedList();
      }

      entries.forEach((entry) => {
        this.set(entry[0], entry[1]);
      });
    }
  }

  /**
   * Generates a hash code for the given key.
   * @param {string} key - The key to hash.
   * @returns {number} - The computed hash code.
   */
  #hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity;
    }
    return hashCode;
  }

  /**
   * Sets a key-value pair in the hashmap.
   * @param {string} key - The key to set.
   * @param {*} value - The value associated with the key.
   */
  set(key, value) {
    const hashCode = this.#hash(key);
    this[hashCode].append(key, value);
    this.#growHashMap();
  }

  /**
   * Retrieves the value associated with the given key.
   * @param {string} key - The key to search for.
   * @returns {*} - The value associated with the key, or null if not found.
   */
  get(key) {
    const hashCode = this.#hash(key);
    const node = this[hashCode].find(key);
    return node ? node.value : null;
  }

  /**
   * Checks if the hashmap contains the given key.
   * @param {string} key - The key to check for.
   * @returns {boolean} - True if the key exists, false otherwise.
   */
  has(key) {
    const hashCode = this.#hash(key);
    return this[hashCode].contains(key);
  }

  /**
   * Removes the key-value pair with the given key from the hashmap.
   * @param {string} key - The key to remove.
   */
  remove(key) {
    const hashCode = this.#hash(key);
    this[hashCode].removeAt(key);
    this.#shrinkHashMap();
  }

  /**
   * Computes the total number of key-value pairs in the hashmap.
   * @returns {number} - The number of key-value pairs.
   */
  length() {
    let length = 0;
    for (let hash = 0; hash < this.#capacity; hash++) {
      length += this[hash].size();
    }
    return length;
  }

  /**
   * Clears all key-value pairs from the hashmap.
   */
  clear() {
    this.#capacity = 16;
    for (let hash = 0; hash < this.#capacity; hash++) {
      this[hash].head = null;
    }
  }

  /**
   * Retrieves an array containing all keys in the hashmap.
   * @returns {Array} - An array of keys.
   */
  keys() {
    let keys = [];
    for (let hash = 0; hash < this.#capacity; hash++) {
      keys = keys.concat(this[hash].keysToArray());
    }
    return keys;
  }

  /**
   * Retrieves an array containing all values in the hashmap.
   * @returns {Array} - An array of values.
   */
  values() {
    let values = [];
    for (let hash = 0; hash < this.#capacity; hash++) {
      values = values.concat(this[hash].valuesToArray());
    }
    return values;
  }

  /**
   * Retrieves an array containing all key-value pairs in the hashmap.
   * @returns {Array} - An array of key-value pairs.
   */
  entries() {
    let keyValues = [];
    for (let hash = 0; hash < this.#capacity; hash++) {
      keyValues = keyValues.concat(this[hash].keyValuesToArray());
    }
    return keyValues;
  }
}

export default HashMap;
