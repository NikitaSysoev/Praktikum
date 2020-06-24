const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

const X = Number(input[1].split(' ').join(''));
const K = Number(input[2]);
const result = String(X + K)
  .split('')
  .join(' ');
console.log(result);
