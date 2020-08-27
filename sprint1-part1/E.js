const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const num = Number(input[0]);

function transformToBinary(number) {
  const divider = 2;
  let binaryNumber = '';

  while (number > 0) {
    binaryNumber += number % divider;
    number = parseInt(number / divider);
  }

  return binaryNumber.split('').reverse().join('');
}

const result = transformToBinary(num);
console.log(result);

// function E(num) {
//   return Number(num).toString(2);
// }
