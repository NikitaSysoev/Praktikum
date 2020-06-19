const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let lengthId = 0;

rl.on('line', (line) => {
  const arr = line.split(' ').map(Number);

  i++;

  if (i === 1) {
    lengthId = arr[0];
  }

  if (i === 2) {
    console.log(F(arr));
    rl.close();
  }
});

// function F(arr) {
//   for (let v of arr) {
//     if (arr.filter((x) => x === v).length > 1) {
//       return v;
//     }
//   }
// }

function F(arr){
  const sum1 = arr.reduce((total, item) => total + item, 0);
  const arrWithoutDouble = [...new Set(arr)];
  const sum2 = arrWithoutDouble.reduce((total, item) => total + item, 0);
  return sum1 - sum2;
}