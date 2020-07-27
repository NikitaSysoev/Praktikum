const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const rows = Number(input[0]);
const columns = Number(input[1]);

const matrix = input.slice(2).map((str) => str.split(' ').map(Number));

console.log(matrix);

let dimension = ['left', 'down', 'right', 'up'];

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {

            console.log(matix[0][j])
            console.log(matrix[i][3])
            console.log()

  }
}
