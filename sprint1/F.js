const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const arr = input[1].split(' ').map(Number);

const sum1 = arr.reduce((total, item) => total + item, 0);
const arrWithoutDouble = [...new Set(arr)];
const sum2 = arrWithoutDouble.reduce((total, item) => total + item, 0);
const result = sum1 - sum2;

console.log(result);
