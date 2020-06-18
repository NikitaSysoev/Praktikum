const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;

rl.on('line', (line) => {
  i++;
  if (i === 2) {
    console.log(J(line));
    rl.close();
  }
});

function J(line) {
  const people = line.split(' ').map(Number);
  const result = new Map();
  for (let x of people) {
    if (result.has(x)) {
      result.delete(x);
    } else {
      result.set(x, x);
    }
  }
  return [...result.values()][0];
}
