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
    let total = 0;
    let node = this.head;
    while (node) {
      total++;
      node = node.next;
    }
    return total;
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
    if (this.size() < 2) return (this.head = null);
    this.head = this.head.next;
  }

  removeLast() {
    if (this.size() < 2) return (this.head = null);
    let node = this.head;
    while (node.next) {
      if (!node.next.next) return (node.next = null);
      node = node.next;
    }
  }

  insertLast(data) {
    if (!this.head) return (this.head = new Node(data));
    const lastNode = this.getLast();
    lastNode.next = new Node(data);
  }

  getAt(idx) {
    let count = 0;
    let node = this.head;
    while (node) {
      if (count === idx) return node;
      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(idx) {
    if (!this.head) return;
    if (idx === 0) return (this.head = this.head.next || null);
    let count = 1;
    let node = this.head;
    while (node.next) {
      if (count === idx) {
        return (node.next = node.next.next || null);
      }
      count++;
      node = node.next;
    }
    return;
  }
}

module.exports = { Node, LinkedList };
