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
      console.log('error');
      return;
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

const stack = new StackSet();

const fs = require('fs');
const os = require('os');
const commands = fs.readFileSync('input.txt', 'utf-8').split(os.EOL).slice(1);

for (let str of commands) {
  const arr = str.split(' ');
  if (arr[0] === 'size' || arr[0] === 'peek') {
    console.log(stack[arr[0]]());
  } else {
    const [fn, arg] = arr;
    if (typeof stack[fn] === 'function') {
      stack[fn](arg);
    }
  }
}
