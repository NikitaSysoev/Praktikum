class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.size() - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  reverse() {
    this.items.reverse();
  }
}

class StackMax extends Stack {
  constructor() {
    super();
  }

  getMax() {
    if (this.isEmpty()) {
      return 'None';
    }
    return Math.max(...this.items);
  }

  get_max() {
    console.log(this.getMax());
  }

  pop() {
    if (this.isEmpty()) {
      console.log('error');
      return;
    }
    return super.pop();
  }
}

const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);
const commands = input.slice(1);

const stack = new StackMax();
for (let str of commands) {
  const arr = str.split(' ');
  if (arr.length === 2) {
    const [fn, arg] = arr;
    stack[fn](arg);
  } else {
    if (typeof stack[arr[0]] === 'function') {
      stack[arr[0]]();
    }
  }
}
