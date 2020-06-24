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
}

class QueueS {
  constructor() {
    this.stack = new Stack();
  }

  get_size() {
    return this.stack.size();
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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let n = 0;
const commands = [];

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    n = Number(line);
  }
  if (i > 1) {
    commands.push(line);
  }
  if (i === n + 1) {
    C();
    rl.close();
  }
});

function C() {
  const q = new QueueS();
  for (let str of commands) {
    const [fn, arg] = str.split(' ');
    if (fn === 'put') {
      q[fn](arg);
    } else {
      console.log(q[fn]());
    }
  }
}
