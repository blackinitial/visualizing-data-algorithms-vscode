class SinglyLinkedList {
  // The head of the list
  head = null;

  // The Node class represents a node in the list
  class Node {
    // The node's value
    value;

    // The node's next property, which points to the next node in the list
    next = null;

    // The constructor for a Node
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }

  // The constructor for a SinglyLinkedList
  constructor() {
    this.head = null;
  }

  // Add a value to the end of the list
  add(value) {
    // Create a new node with the given value
    let node = new this.Node(value);

    // If the list is empty, set the new node as the head
    if (this.head === null) {
      this.head = node;
    } else {
      // Otherwise, find the last node and set its next property to the new node
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
}
