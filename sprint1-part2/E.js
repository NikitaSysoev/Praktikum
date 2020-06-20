const readline = require('readline');
const LinkedList = require('../LinkedList');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let n = 0;
const list = new LinkedList();

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    n = Number(line);
  }
  if (i > 1) {
    list.addNodeToHead(line);
  }
  if (i === n + 1) {
    E();
    rl.close();
  }
});

function E() {
  list.logLinkedList();
}
