const readline = require('readline');
const { MyQueue } = require('../Queue');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let n = 0;
const commands = [];
let queue = null;

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    n = Number(line);
  }
  if (i === 2) {
    queue = new MyQueue(Number(line));
  }
  if (i > 2) {
    commands.push(line);
  }
  if (i === n + 2) {
    M();
    rl.close();
  }
});

function M() {
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
        queue[fn]();
      }
    }
  }
}
