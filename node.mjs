/**
 * Class representing a node in a linked list.
 */
class Node {
  /**
   * Create a new Node.
   * @param {*} key - The key of the node. Defaults to null.
   * @param {*} value - The value to be stored in the node. Defaults to null.
   */
  constructor(key = null, value = null) {
    this.key = key; // Store the key of the node
    this.value = value; // Store the value in the node
    this.next = null; // Initialize the next pointer to null
  }
}

export default Node;
