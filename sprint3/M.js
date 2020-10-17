const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const word = input[0];

let result = '';
for (let [index, x] of input.entries()) {
  if (index === 0 || index === 1) {
    continue;
  }

  if (x.length < result.length) {
    continue;
  }
  let count = 0;

  const x1 = x.split('').sort();

  for (let y of x1) {
    if (word.includes(y)) {
      count++;
    }
  }
  if (count > result.length) {
    result = x;
  }
}

console.log(result);
