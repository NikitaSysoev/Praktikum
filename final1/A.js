const readline = require('readline');
const { Stack } = require('../Stack');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  A(line);
  rl.close();
});

class StackX extends Stack {
  constructor() {
    super();
    this.flag = null;
    this.operands = ['/', '+', '-', '*'];
  }

  sum(n1, n2, arg) {
    n1 = Number(n1);
    n2 = Number(n2);
    if (arg === '+') {
      return n1 + n2;
    }
    if (arg === '*') {
      return n1 * n2;
    }
    if (arg === '/') {
      return Math.floor(n1 / n2);
    }
    if (arg === '-') {
      return n1 - n2;
    }
  }

  push(item) {
    if (!this.operands.includes(item)) {
      if (this.flag) {
        const res = this.sum(super.peek(), item, this.flag);
        this.flag = null;
        super.push(res);
      } else {
        super.push(item);
      }
    } else {
      if (this.size() === 1) {
        this.flag = item;
      } else {
        const x1 = super.pop();
        const x2 = super.pop();
        const res = this.sum(x2, x1, item);
        super.push(res);
      }
    }
  }
}

function A(str) {
  const stack = new StackX();

  for (let x of str.split(' ')) {
    stack.push(x);
  }
  console.log(stack.peek());
}
