const readline = require('readline');
const { LinkedQueue } = require('../LinkedQueue');

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
