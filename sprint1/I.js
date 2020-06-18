const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
const nums = [];

rl.on('line', (line) => {
  i++;
  nums.push(line);
  if (i === 2) {
    console.log(I());
    rl.close();
  }
});

function I() {
  const [num1, num2] = nums;
  const sum = parseInt(num1, 2) + parseInt(num2, 2);
  return Number(sum).toString(2);
}
