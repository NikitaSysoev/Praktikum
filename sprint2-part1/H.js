const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const arr = input[1].split(' ').map((s) => Number(s));

let max = 0;
let current = 0;

for (let i = 1; i < arr.length; i++) {
  if (Math.sign(arr[i] - arr[i - 1]) === 1) {
    current++;
    if (current > max) {
      max++;
    }
  } else {
    current = 0;
  }
}

console.log(max + 1);
