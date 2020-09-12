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

  addNodeToHead(value) {
    const node = new LinkedListNode(value);

    if (this.length) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;

    return node;
  }

  deleteNode(index) {
    const { value } = this.head;
    let current = this.head;

    if (index === 0) {
      this.head = current.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let prev = null;

      while (current !== null && index > 0) {
        prev = current;
        current = current.next;
        index--;
      }

      if (current !== null) {
        prev.next = current.next;
        if (current.next) {
          current.next.prev = prev;
        }
      }
    }

    this.length--;
    return value;
  }

  findItemIndex(value) {
    let i = 0;
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }

    return -1;
  }

  logLinkedList() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    for (let value of nodes) {
      console.log(value);
    }
  }
}

class LinkedQueue {
  constructor() {
    this.queue = new LinkedList();
  }

  get() {
    if (this.isEmpty()) {
      return 'error';
    } else {
      return this.queue.deleteNode(0);
    }
  }

  put(value) {
    this.queue.addNode(value);
  }

  size() {
    return this.queue.length;
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

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    n = Number(line);
  }
  if (i > 1) {
    commands.push(line);
  }
  if (i === n + 1) {
    P();
    rl.close();
  }
});

function P() {
  const q = new LinkedQueue();
  for (let str of commands) {
    const arr = str.split(' ');
    if (arr[0] !== 'put') {
      console.log(q[arr[0]]());
    } else {
      const [fn, arg] = arr;
      q[fn](arg);
    }
  }
}
