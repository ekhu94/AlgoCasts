// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  size() {
    let count = 0;
    const headNode = this.head;
    while (this.head) {
      count++;
      this.head = this.head.next;
    }
    this.head = headNode;
    return count;
  }
}

module.exports = { Node, LinkedList };
