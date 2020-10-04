const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const length = Number(input[0]);
const arr = input[1].split(' ').map((num) => Number(num));

function findMaximum(arr, length) {
  if (length === 0 || length === 1) {
    return 0;
  }

  let sum = 0;

  while (length > 1) {
    arr.sort((a, b) => b - a);
    if (arr[0] <= 0) {
      break;
    }
    if (arr[length - 1] <= 0) {
      --length;
      continue;
    }
    --arr[0];
    --arr[length - 1];
    if (arr[length - 1] === 0) {
      arr.pop();
      --length;
    }
    sum++;
  }
  return sum;
}

console.log(findMaximum(arr, length));
