const readline = require('readline');
const { Stack } = require('../Stack');

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
    O();
    rl.close();
  }
});

class StackMaxEffective extends Stack {
  constructor() {
    super();
    this.set = new Set();
  }

  getMax() {
    return super.isEmpty() ? 'None' : super.peek().top;
  }

  get_max() {
    console.log(this.getMax());
  }

  push(item) {
    const top = super.isEmpty() ? item : Math.max(item, this.getMax());
    super.push(item);
  }

  pop() {
    if (super.isEmpty()) {
      console.log('error');
    } else {
      return super.pop();
    }
  }
}

function O() {
  const stack = new StackMaxEffective();
  for (let str of commands) {
    const arr = str.split(' ');
    if (arr.length === 2) {
      const [fn, arg] = arr;
      stack[fn](arg);
    } else {
      stack[arr[0]]();
    }
  }
  // stack.pop()
  // stack.pop()

  // stack.push(4)
  // stack.push(-5)
  // stack.push(7)
  // stack.pop()
  // stack.pop()

  // stack.get_max()

  // stack.pop()
  // stack.get_max()
}
