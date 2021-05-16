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
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) return (this.head = null);
    let prev = this.head;
    while (prev.next) {
      if (!prev.next.next) {
        return (prev.next = null);
      }
      prev = prev.next;
    }
  }

  insertLast(data) {
    if (!this.head) return (this.head = new Node(data));
    const lastNode = this.getLast();
    lastNode.next = new Node(data);
  }

  getAt(idx) {
    if (!this.head) return null;
    let count = 0;
    let node = this.head;
    while (node) {
      if (count === idx) {
        return node;
      }
      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(idx) {
    if (!this.head) return;
    if (idx === 0) return (this.head = this.head.next);
    const prev = this.getAt(idx - 1);
    if (prev && prev.next) {
      prev.next = prev.next.next;
    }
    return;
  }

  insertAt(data, idx) {
    if (!this.head) return (this.head = new Node(data));
    if (idx === 0) return (this.head = new Node(data, this.head));
    const prev = this.getAt(idx - 1) || this.getLast();
    prev.next = new Node(data, prev.next);
  }
}

module.exports = { Node, LinkedList };
