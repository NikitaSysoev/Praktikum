const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  console.log(K(line));
  rl.close();
});

function K(num) {
  const doubleNum = Number(num).toString(2);
  return doubleNum.split('0').join('').length;
}
