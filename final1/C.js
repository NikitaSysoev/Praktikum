const readline = require('readline');
const QueueS = require('../StackedQueue');

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
    C();
    rl.close();
  }
});

function C() {
  const q = new QueueS();
  for (let str of commands) {
    const [fn, arg] = str.split(' ');
    if (fn === 'put') {
      q[fn](arg);
    } else {
      console.log(q[fn]());
    }
  }
}
