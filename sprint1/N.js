const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  console.log(N(line));
  rl.close();
});

Number.prototype.logx = function (x) {
  return Math.log(this) / Math.log(x);
};

function N(line) {
  const num = Number(line).logx(4);
  return Number.isInteger(num) ? 'True' : 'False';
}
