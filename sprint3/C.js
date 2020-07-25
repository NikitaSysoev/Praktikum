const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const array = input[1].split(' ').map(Number);

function quickSort(array, left = 0, right = array.length - 1) {
  let l = left;
  let r = right;
  let middle = array[Math.round((left + right) / 2)];

  while (l <= r) {
    while (array[l] < middle) {
      l++;
    }
    while (array[r] > middle) {
      r--;
    }
    if (l <= r) {
      [array[l], array[r]] = [array[r], array[l]];
      l++;
      r--;
    }
  }

  if (left < r) {
    quickSort(array, left, r);
  }

  if (l < right) {
    quickSort(array, l, right);
  }

  return array;
}

console.log(quickSort(array).join(' '));
