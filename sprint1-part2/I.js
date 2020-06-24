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
    I();
    rl.close();
  }
});

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

function I() {
  const stack = new StackMax();
  for (let str of commands) {
    const arr = str.split(' ');
    if (arr.length === 2) {
      const [fn, arg] = arr;
      stack[fn](arg);
    } else {
      stack[arr[0]]();
    }
  }
}
