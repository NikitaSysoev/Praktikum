const { Stack } = require('./Stack');

class QueueS {
  constructor() {
    this.stack = new Stack();
  }

  get_size() {
    return this.stack.items.length;
  }

  put(value) {
    this.stack.push(value);
  }

  get() {
    if (this.get_size() === 0) {
      return 'error';
    }

    const newStack = new Stack();

    let result = null;

    while (this.get_size() !== 0) {
      if (this.get_size() === 1) {
        const last = this.stack.pop();
        result = last;
        break;
      }
      const last = this.stack.pop();
      newStack.push(last);
    }
    newStack.items.reverse();
    this.stack = newStack;

    return result;
  }
}

module.exports = QueueS;
