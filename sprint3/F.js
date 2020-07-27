const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const array = input[1] ? input[1].split(' ').map(Number) : [];

function sort(array) {
  const even = array.find((i) => evenN(i));
  const noteven = array.find((i) => !evenN(i));

  if (array.length <= 2) {
    return [even, noteven];
  }

  const indexA = array.indexOf(even);
  array.splice(indexA, 1);
  const indexB = array.indexOf(noteven);
  array.splice(indexB, 1);

  return [even, noteven].concat(sort(array));
}

function evenN(n) {
  return !(n % 2);
}

console.log(sort(array).join(' '));
