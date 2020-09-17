class MyQueueSized {
  constructor(maxN) {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.length = 0;
    this.maxN = maxN;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(item) {
    if (this.length !== this.maxN) {
      this.queue[this.tail] = item;
      this.tail++;
      this.length++;
    } else {
      return 'error';
    }
  }

  pop() {
    if (this.isEmpty()) {
      return 'None';
    } else {
      const x = this.queue[this.head];
      this.queue[this.head] = null;
      this.head++;
      this.length--;
      return x;
    }
  }

  peek() {
    return this.isEmpty() ? 'None' : this.queue[this.head];
  }

  size() {
    return this.length;
  }
}

const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const queue = new MyQueueSized(Number(input[1]));
const commands = input.slice(2);

for (let str of commands) {
  const arr = str.split(' ');
  if (arr[0] === 'size' || arr[0] === 'peek' || arr[0] === 'pop') {
    console.log(queue[arr[0]]());
  } else {
    const [fn, arg] = arr;
    if (arg) {
      const x = queue[fn](arg);
      if (x) {
        console.log(x);
      }
    } else {
      if (typeof queue[fn] === 'function') {
        queue[fn]();
      }
    }
  }
}
