const LinkedList = require('./LinkedList');

class LinkedQueue {
  constructor() {
    this.queue = new LinkedList();
  }

  get() {
    if (this.isEmpty()) {
      return 'error';
    } else {
      const { value } = this.queue.head;
      this.queue.deleteNode(0);
      return value;
    }
  }

  put(value) {
    this.queue.addNode(value);
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

module.exports = { LinkedQueue };
