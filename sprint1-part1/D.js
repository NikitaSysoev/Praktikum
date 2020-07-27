const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const numbers = input[1].split(' ').map(Number);

let result = '';

numbers.forEach((number) => {
  if (number) {
    result += `${number} `;
  }
});

console.log(result);
