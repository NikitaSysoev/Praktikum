const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const n = Number(input);

function solution(num) {
  if (num <= 1) {
    return 1;
  } else {
    let sum = 0;
    for (let root = 1; root <= num; root++) {
      sum = sum + solution(root - 1) * solution(num - root);
    }
    return sum;
  }
}

console.log(solution(n));
