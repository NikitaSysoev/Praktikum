const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const value = Number(input[1]);
const arr = input[2].split(' ').map(Number);

// 2 вариант
function binarySearch2(arr, value, left = 0, right = arr.length - 1) {
  const midIndex = Math.floor((left + right) / 2);

  if (arr[midIndex] === value) {
    return midIndex;
  }

  if (left >= right) {
    return -1;
  }

  return new Set(arr.slice(midIndex + 1)).has(value)
    ? binarySearch2(arr, value, midIndex + 1, right)
    : binarySearch2(arr, value, left, midIndex - 1);
}

console.log(binarySearch2(arr, value));

//3 вариант
function binarySearch3(arr, value) {
  const midIndex = Math.floor(arr.length / 2);

  if (arr[midIndex] === value) {
    return midIndex;
  }

  if (midIndex === 0) {
    return -1;
  }

  const arrRight = arr.splice(midIndex);

  return new Set(arr).has(value)
    ? binarySearch3(arr, value)
    : binarySearch3(arrRight, value);
}

console.log(binarySearch3(arr, value));
