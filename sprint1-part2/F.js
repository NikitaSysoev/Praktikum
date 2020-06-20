const readline = require('readline');
const LinkedList = require('../LinkedList');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let n = 0;
let d = 0;
const list = new LinkedList();

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    n = Number(line);
  }
  if (i > 1 && i < n + 2) {
    list.addNodeToHead(line);
  }
  if (i === n + 2) {
    d = Number(line);
    F();
    rl.close();
  }
});

function F() {
  list.deleteNode(d);
  list.logLinkedList();
}
