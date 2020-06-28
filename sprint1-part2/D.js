const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

let countRows = Number(input[0]);
let countColumns = Number(input[1]);
const matrix = input
  .slice(2, countRows + 2)
  .map((line) => [...line.split(' ').map(Number)]);
const coords = input.slice(countRows + 2).map(Number);

const [y, x] = coords;

const right = x + 1;
const left = x - 1;
const down = y + 1;
const up = y - 1;

const arr = [];

for (let i = 0; i < countRows; i++) {
  for (let j = 0; j < countColumns; j++) {
    if (j === x && i === up) {
      arr.push(matrix[i][j]);
    }

    if (j === x && i === down) {
      arr.push(matrix[i][j]);
    }

    if (j === right && i === y) {
      arr.push(matrix[i][j]);
    }

    if (j === left && i === y) {
      arr.push(matrix[i][j]);
    }
  }
}

arr.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  if (a === b) return 0;
});

console.log(arr.join(' '));
