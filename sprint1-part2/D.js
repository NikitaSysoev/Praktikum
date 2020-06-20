const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;

let countRows = 0;
let countColumns = 0;
const matrix = [];
const coords = [];

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    countRows = Number(line);
  }
  if (i === 2) {
    countColumns = Number(line);
  }
  if (i > 2 && i <= countRows + 2) {
    matrix.push([...line.split(' ').map(Number)]);
  }
  if (i >= countRows + 3) {
    coords.push(line);
  }
  if (i === countRows + 4) {
    D();
    rl.close();
  }
});

function D() {
  const [y, x] = coords.map(Number);

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
}
