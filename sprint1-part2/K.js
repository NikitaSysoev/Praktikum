const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addNode(value) {
    const node = new LinkedListNode(value);

    if (this.length) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;

    return node;
  }

  popNode() {
    const value = this.tail.value;
    this.tail = this.tail.prev;
    this.length--;
    return value;
  }
}

class StackSet {
  constructor() {
    this.set = new Set();
    this.last = new LinkedList(null);
  }

  push(item) {
    if (!this.set.has(item)) {
      this.set.add(item);
      this.last.addNode(item);
    }
  }

  pop() {
    if (this.isEmpty()) {
      return 'error';
    }

    const item = this.last.popNode();
    this.set.delete(item);
  }

  peek() {
    if (this.isEmpty()) {
      return 'error';
    }
    return this.last.tail.value;
  }

  size() {
    return this.set.size;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false,
// });

// let i = 0;
// let n = 0;
// const commands = [];
const stack = new StackSet();

// rl.on('line', (line) => {
//   i++;
//   if (i === 1) {
//     n = Number(line);
//   }
//   if (i > 1) {
//     commands.push(line);
//   }
//   if (i === n + 1) {
//     K();
//     rl.close();
//   }
// });

const result = [];

input.slice(1).forEach((c) => {
  const [fn, arg] = c.split(' ');
  result.push(stack[fn](arg));
});

console.log(result.filter(Boolean).map(String).join(os.EOL));
