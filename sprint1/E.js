const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  console.log(E(line));
  rl.close();
});

function E(num) {
  return Number(num).toString(2);
}