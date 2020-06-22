const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let line1 = '';

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    line1 = line;
  }
  if (i === 2) {
    console.log(I(line1, line));
    rl.close();
  }
});

function I(num1, num2) {
  const sum = parseInt(num1, 2) + parseInt(num2, 2);
  return Number(sum).toString(2);
}
