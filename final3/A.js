const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const array = input[1].split(' ');

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (Number(arr[j] + arr[i]) > Number(arr[i] + arr[j])) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

// array.sort((a, b) => Number(b + a) - Number(a + b));
// console.log(array.join(''));

console.log(bubbleSort(array).join(''));
