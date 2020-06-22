class MyQueue {
  constructor(maxN) {
    this.queue = Array(maxN).fill(null);
    this.head = 0;
    this.tail = 0;
    this.length = 0;
    this.maxN = maxN;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(item) {
    if (this.length !== this.maxN) {
      this.queue[this.tail] = item;
      this.tail = (this.tail + 1) % this.maxN;
      this.length++;
    } else {
      return 'error';
    }
  }

  pop() {
    if (this.isEmpty()) {
      return 'None';
    } else {
      const x = this.queue[this.head];
      this.queue[this.head] = null;
      this.head = (this.head + 1) % this.maxN;
      this.length--;
      return x;
    }
  }

  peek() {
    return this.isEmpty() ? 'None' : this.queue[this.head];
  }

  size() {
    return this.length;
  }
}

module.exports = { MyQueue };
