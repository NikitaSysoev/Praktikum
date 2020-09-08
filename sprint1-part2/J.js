class Stack {
  constructor() {
    this.last = null;
    this.size = 0;
  }

  push(item) {
    this.size++;
    const prev = this.last;
    const element = { prev, item };
    this.last = element;
  }

  pop() {
    if (!this.isEmpty()) {
      const element = this.last;
      this.last = element.prev;
      this.size--;
      return element.item;
    }
  }

  peek() {
    return this.last.item;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}

class StackMaxEffective extends Stack {
  constructor() {
    super();
  }

  getMax() {
    return super.isEmpty() ? 'None' : super.peek();
  }

  push(item) {
    const top = super.isEmpty() ? item : Math.max(item, super.peek());
    super.push(top);
  }

  get_max() {
    console.log(this.getMax());
  }

  pop() {
    if (super.isEmpty()) {
      console.log('error');
    } else {
      return super.pop();
    }
  }
}

const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL).slice(1);

const stack = new StackMaxEffective();

for (let str of input) {
  const arr = str.split(' ');
  if (arr.length === 2) {
    const [fn, arg] = arr;
    stack[fn](arg);
  } else {
    stack[arr[0]]();
  }
}
