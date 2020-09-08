const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const K = Number(input[2]);

let str = '';

for (let item of input[1]) {
  if (item === ' ') continue;
  str += item;
}

const X = Number(str);

const result = String(X + K)
  .split('')
  .join(' ');

console.log(result);
