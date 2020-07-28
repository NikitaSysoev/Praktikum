const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);
const quickSort = require('../quickSort');

const array = input[1] ? input[1].split(' ').map(Number) : [];

function findP(array) {
  const arr = quickSort(array);
  const [x, y, z] = arr;

  if (x >= y + z) {
    array.shift();
    return findP(array);
  }
  return x + y + z;
}

console.log(findP(array));
