import LinkedList from "./linked-list.mjs";

class HashMap {
  constructor() {
    this.capacity = 16;
    this.load_factor = 0.75;

    for (let hash = 0; hash < this.capacity; hash++) {
      this[hash] = new LinkedList();
    }
  }

  growHashMap() {
    if (this.length() >= this.load_factor * this.capacity) {
      const entries = this.entries();
      this.capacity *= 2;

      for (let hash = 0; hash < this.capacity; hash++) {
        this[hash] = new LinkedList();
      }

      entries.forEach((entry) => {
        this.set(entry[0], entry[1]);
      });
    }
  }

  shrinkHashMap() {
    if (this.capacity === 16) return;

    if (this.length() < this.load_factor * (this.capacity / 2)) {
      const entries = this.entries();
      this.capacity /= 2;

      for (let hash = 0; hash < this.capacity; hash++) {
        this[hash] = new LinkedList();
      }

      entries.forEach((entry) => {
        this.set(entry[0], entry[1]);
      });
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    this[hashCode].append(key, value);
    this.growHashMap();
  }

  get(key) {
    const hashCode = this.hash(key);
    const node = this[hashCode].find(key);
    return node ? node.value : null;
  }

  has(key) {
    const hashCode = this.hash(key);
    return this[hashCode].contains(key);
  }

  remove(key) {
    const hashCode = this.hash(key);
    this[hashCode].removeAt(key);
    this.shrinkHashMap();
  }

  length() {
    let length = 0;
    for (let hash = 0; hash < this.capacity; hash++) {
      length += this[hash].size();
    }
    return length;
  }

  clear() {
    this.capacity = 16;
    for (let hash = 0; hash < this.capacity; hash++) {
      this[hash].head = null;
    }
  }

  keys() {
    let keys = [];
    for (let hash = 0; hash < this.capacity; hash++) {
      keys = keys.concat(this[hash].keysToArray());
    }
    return keys;
  }

  values() {
    let values = [];
    for (let hash = 0; hash < this.capacity; hash++) {
      values = values.concat(this[hash].valuesToArray());
    }
    return values;
  }

  entries() {
    let keyValues = [];
    for (let hash = 0; hash < this.capacity; hash++) {
      keyValues = keyValues.concat(this[hash].keyValuesToArray());
    }
    return keyValues;
  }
}

export default HashMap;
