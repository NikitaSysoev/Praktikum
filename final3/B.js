const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const n = input[2].split(' ').map(Number);
const m = input[3].split(' ').map(Number);

const len = n.length + m.length;
const even = len % 2 === 0;

function solution(arr1, arr2) {
  const arr = arr1.concat(arr2);
  arr.sort((a, b) => a - b);

  return even
    ? (arr[Math.floor(len / 2) - 1] + arr[Math.ceil(len / 2)]) / 2
    : arr[Math.floor(len / 2)];
}

console.log(solution(n, m));
