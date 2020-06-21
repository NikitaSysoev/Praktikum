const readline = require('readline');
const { StackMax } = require('../Stack');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let n = 0;
const commands = [];
const stack = new StackMax();

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    n = Number(line);
  }
  if (i > 1) {
    commands.push(line);
  }
  if (i === n + 1) {
    I();
    rl.close();
  }
});

function I() {
  for (let str of commands) {
    const arr = str.split(' ');
    if (arr.length === 2) {
      const [fn, arg] = arr;
      stack[fn](arg);
    } else {
      stack[arr[0]]();
    }
  }
}
