const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const arr1 = input[2].split(' ').map(Number);
const arr2 = input[3].split(' ').map(Number);

function solution(arr1, arr2) {
  let p1 = arr1.length;
  let p2 = arr2.length;
  let n = p1 + p2;
  if (n === 0) n--;
  let med = 0;
  p1--;
  p2--;
  while (0 < n) {
    if (p2 < 0 || (p1 >= 0 && arr1[p1] > arr2[p2])) med = arr1[p1--];
    else med = arr2[p2--];
    n -= 2;
  }
  if (0 == n) {
    if (p2 < 0 || (p1 >= 0 && arr1[p1] > arr2[p2])) med = med + arr1[p1];
    else med = med + arr2[p2];
    med /= 2;
  }
  return med;
}

console.log(solution(arr1, arr2));
// 37311710
