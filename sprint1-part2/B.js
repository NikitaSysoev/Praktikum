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

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    countRows = Number(line);
  }
  if (i === 2) {
    countColumns = Number(line);
  }
  if (i > 2) {
    matrix.push([...line.split(' ').map(Number)]);
  }
  if (i === countRows + 2) {
    B();
    rl.close();
  }
});

function B() {
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
}
