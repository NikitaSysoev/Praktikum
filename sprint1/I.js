const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

let maxNum = input[0];
let minNum = input[1];

if (minNum.length !== maxNum.length) {
  maxNum = maxNum.length > minNum.length ? maxNum : minNum;
  minNum = maxNum.length > minNum.length ? minNum : maxNum;
}

maxNum = maxNum.padStart(maxNum.length + 1, '0');
minNum = minNum.padStart(maxNum.length, '0');

const obj = {};
let result = '';

for (let i = maxNum.length - 1; i >= 0; i--) {
  if ((obj[i] || 0) + Number(maxNum[i]) + Number(minNum[i]) === 0) {
    result = '0' + result;
    obj[i - 1] = 0;
  }
  if ((obj[i] || 0) + Number(maxNum[i]) + Number(minNum[i]) === 1) {
    result = '1' + result;
    obj[i - 1] = 0;
  }
  if ((obj[i] || 0) + Number(maxNum[i]) + Number(minNum[i]) === 2) {
    result = '0' + result;
    obj[i - 1] = 1;
  }
  if ((obj[i] || 0) + Number(maxNum[i]) + Number(minNum[i]) === 3) {
    result = '1' + result;
    obj[i - 1] = 1;
  }
}

console.log(result);
