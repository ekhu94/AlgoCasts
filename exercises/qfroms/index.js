// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(data) {
    this.first.push(data);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const item = this.second.pop();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return item;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const item = this.second.peek();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return item;
  }
}

module.exports = Queue;
