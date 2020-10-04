const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const value = Number(input[1]);
const arr = input[2].split(' ').map(Number);

function binarySearch(arr, value, left = 0, right = arr.length - 1) {
  const midIndex = Math.floor((left + right) / 2);

  if (arr[midIndex] === value) {
    return midIndex;
  }

  if (left >= right) {
    return -1;
  }

  return new Set(arr.slice(midIndex + 1)).has(value)
    ? binarySearch(arr, value, midIndex + 1, right)
    : binarySearch(arr, value, left, midIndex - 1);
}

console.log(binarySearch(arr, value));
