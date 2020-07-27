const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const doubleNum = Number(input[0]).toString(2);
const result = doubleNum.split('0').join('').length;
console.log(result);
