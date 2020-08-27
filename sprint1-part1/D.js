const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const numbers = input[1].split(' ').map(Number);

// 1 вариант
// let result = '';

// numbers.forEach((number) => {
//   if (number) {
//     result += `${number} `;
//   }
// });

// console.log(result);

// 2 вариант

let step = 0;

while (step !== numbers.length) {
  if (numbers[step] === 0) {
    numbers.splice(step, 1);
  } else {
    step++;
  }
}

console.log(numbers.join(' '));
