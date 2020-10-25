const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const number = +input[0];

function solution(n) {
  const obj = {
    0: 0,
    1: 1,
    2: 4,
    3: 9,
    4: 16,
    5: 25,
    6: 36,
    7: 49,
    8: 64,
    9: 81,
  };

  if (String(n).length === 1) {
    return n === 1 ? 'True' : 'False';
  }

  const sum = String(n)
    .split('')
    .reduce((acc, item) => {
      return acc + obj[item];
    }, 0);
  return solution(sum);
}

console.log(solution(number));
