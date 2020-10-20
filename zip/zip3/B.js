const fs = require('fs');
const { EOL } = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(EOL);

const n = input[2].split(' ').map(Number);
const m = input[3].split(' ').map(Number);

const len = n.length + m.length;
const isEven = len % 2 === 0;

function solution(arr1, arr2) {
  const arr = arr1.concat(arr2);
  arr.sort((a, b) => a - b);

  return isEven
    ? (arr[Math.floor(len / 2) - 1] + arr[Math.ceil(len / 2)]) / 2
    : arr[Math.floor(len / 2)];
}

console.log(solution(n, m));
// 37207642
