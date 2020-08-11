const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const value = Number(input[1]);
const arr = input[2].split(' ').map(Number);

// 1 вариант
function binarySearch1(arr, value, left = 0, right = arr.length - 1) {
  const midIndex = Math.floor((left + right) / 2);

  if (arr[midIndex] === value) {
    return midIndex;
  }

  if (arr[left] === value) {
    return left;
  }

  if (arr[right] === value) {
    return right;
  }

  left++;
  right--;

  if (left >= right) {
    return -1;
  }

  return binarySearch1(arr, value, left, right);
}


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
