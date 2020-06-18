const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
const input = [];

rl.on('line', (line) => {
  i++;
  input.push(line);
  if (i === 3) {
    console.log(C());
    rl.close();
  }
});

function C() {
  let [, X, K] = input;
  X = X.split(' ').join('');
  const result = String(Number(X) + Number(K))
    .split('')
    .join(' ');
  return result;
}
