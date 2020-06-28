const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

let countRows = Number(input[0]);
let countColumns = Number(input[1]);
const matrix = input.slice(2).map((line) => [...line.split(' ').map(Number)]);

const set = new Set();

for (let i = 0; i < countColumns; i++) {
  let arr = [];
  for (let j = 0; j < countRows; j++) {
    arr.push(matrix[j][i]);
  }
  set.add(arr);
}

for (const res of set.values()) {
  console.log(res.join(' '));
}
