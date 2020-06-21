const readline = require('readline');
const { StackSet } = require('../Stack');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let n = 0;
const commands = [];
const stack = new StackSet();

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    n = Number(line);
  }
  if (i > 1) {
    commands.push(line);
  }
  if (i === n + 1) {
    K();
    rl.close();
  }
});

function K() {
  for (let str of commands) {
    const arr = str.split(' ');
    if (arr[0] === 'size' || arr[0] === 'peek') {
      console.log(stack[arr[0]]());
    } else {
      const [fn, arg] = arr;
      if (arg) {
        stack[fn](arg);
      } else {
        stack[fn]();
      }
    }
  }
}
