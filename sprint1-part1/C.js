const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const X = Number(input[1].split(' ').join(''));
const K = Number(input[2]);
const result = String(X + K)
  .split('')
  .join(' ');
console.log(result);
