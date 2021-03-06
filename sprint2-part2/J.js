const fs = require('fs');
const os = require('os');
const [n, k] = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

// function solution(n, k, text = '0') {
//   let mid = Math.floor(text.length / 2);

//   if (n === 0) {
//     return text[k - 1];
//   }

//   if (text === '0') {
//     return solution(n - 1, k, '01');
//   }

//   let second = text.slice(mid);
//   second = second.split('0').join('0x');
//   second = second.split('1').join('10');
//   second = second.split('x').join('1');

//   text = text + second;

//   if (text[k - 1]) {
//     return text[k - 1];
//   }

//   return solution(n - 1, k, text);
// }

console.log(solution(Number(n), Number(k)));

function solution(n, k, step = 0, length = Math.pow(2, n - 1)) {
  const mid = length / 2;

  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    const text = '010';
    if (step % 2 === 0) {
      return text[k - 1];
    } else {
      return text[k];
    }
  }

  if (k > mid) {
    step++;
    k = k - mid;
  }

  return solution(n - 1, k, step, mid);
}
