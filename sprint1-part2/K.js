class StackSet {
  constructor() {
    this.set = new Set();
    this.last = null;
  }

  push(item) {
    if (!this.set.has(item)) {
      this.last = item;
      this.set.add(item);
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log('error');
      return;
    }

    const iterator = this.set.values();
    let i = 0;
    while (i !== this.set.size - 1) {
      i++;
      this.last = iterator.next().value;
    }

    // this.last = arr[arr.length - 2] || null;
    this.set.delete(iterator.next().value);
  }

  peek() {
    if (this.isEmpty()) {
      return 'error';
    }
    return Number(this.last);
  }

  size() {
    return this.set.size;
  }

  isEmpty() {
    return this.size() === 0;
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
const stack = new StackSet();

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    n = Number(line);
  }
  if (i > 1) {
    commands.push(line);
  }
  if (i === n + 1) {
    K();
    rl.close();
  }
});

// const fs = require('fs');
// const os = require('os');
// const commands = fs.readFileSync('input.txt', 'utf-8').split(os.EOL).slice(1);

function K() {
  for (let str of commands) {
    const arr = str.split(' ');
    if (arr[0] === 'size' || arr[0] === 'peek') {
      console.log(stack[arr[0]]());
    } else {
      const [fn, arg] = arr;
      if (arg) {
        stack[fn](arg);
      } else {
        stack[fn]();
      }
    }
  }
}
