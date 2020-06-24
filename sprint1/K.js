const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

const doubleNum = Number(input[0]).toString(2);
const result = doubleNum.split('0').join('').length;
console.log(result);
