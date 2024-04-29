import Node from "./node.js";

/**
 * Class representing a linked list.
 */
class LinkedList {
  /**
   * Create a new LinkedList.
   */
  constructor() {
    this.head = null; // Initialize the head of the linked list to null
  }

  /**
   * Append a new node with the given value to the end of the linked list.
   * @param {*} value - The value to append.
   */
  append(key, value) {
    const newNode = new Node(key, value); // Create a new node with the given value
    if (!this.head) {
      this.head = newNode; // If the list is empty, set the new node as the head
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode; // Traverse to the end of the list and append the new node
    }
  }

  /**
   * Get the number of nodes in the linked list.
   * @returns {number} - The number of nodes in the linked list.
   */
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  /**
   * Get the first node of the linked list.
   * @returns {Node|null} - The first node of the linked list, or null if the list is empty.
   */
  head() {
    return this.head;
  }

  /**
   * Get the last node of the linked list.
   * @returns {Node|null} - The last node of the linked list, or null if the list is empty.
   */
  tail() {
    let current = this.head;
    while (current && current.next) {
      current = current.next;
    }
    return current;
  }

  /**
   * Check if the linked list contains a node with the specified key.
   * @param {*} key - The key to search for.
   * @returns {boolean} - True if the key is found, false otherwise.
   */
  contains(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
   * Find the node of the first occurrence of the specified key in the linked list.
   * @param {string} key - The key to search for.
   * @returns {Node|null} - The node in the linked list with the specified key, or null if the key is not found.
   */
  find(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * Convert the linked list to a array of keys.
   * @returns {Array} - An array of keys in the linked list.
   */
  keysToArray() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.key);
      current = current.next;
    }
    return result;
  }

  /**
   * Convert the linked list to a array of values.
   * @returns {Array} - An array of values in the linked list.
   */
  valuesToArray() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  /**
   * Convert the linked list to a array of key-value pairs.
   * @returns {Array} - An array of key-value pairs in the linked list.
   */
  keyValuesToArray() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push([current.key, current.value]);
      current = current.next;
    }
    return result;
  }

  /**
   * Remove the node at the specified key from the linked list.
   * @param {string} key - The key of the node to remove.
   * @throws {Error} - If the key is not found.
   */
  removeAt(key) {
    if (!this.head) {
      throw new Error("Empty list");
    }
    if (this.head.key === key) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.key === key) {
        prev.next = current.next;
        return;
      }
      prev = current;
      current = current.next;
    }
    throw new Error("Key not found");
  }
}

export default LinkedList;
