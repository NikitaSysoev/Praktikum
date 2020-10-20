const fs = require('fs');
const { EOL } = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(EOL);

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

console.log(bubbleSort(array).join(''));
// id 37206937
