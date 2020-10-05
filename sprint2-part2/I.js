const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

let winners = Number(input[0]);
const nums = input[2].split(' ').map(Number);

const sum = nums.reduce((acc, item) => acc + item, 0);

if (sum % winners !== 0) {
  console.log('False');
  return;
}

const priz = sum / winners;

if (nums.find((num) => num > priz)) {
  console.log('False');
  return;
}

if (nums.length < winners) {
  console.log('False');
  return;
}

const x = nums.filter((item) => item === priz);
let j = x.length;
while (j > 0) {
  let n = nums.find((item) => item === priz);
  const index = nums.indexOf(n);
  nums.splice(index, 1);
  j--;
  winners--;
}

nums.sort((a, b) => b - a);

const wins = Array(winners).fill(0);

function search(arr) {
  if (arr.length === 0) {
    return;
  }
  const moneta = arr.shift();
  for (let i = 0; i < wins.length; i++) {
    if (wins[i] + moneta <= priz) {
      wins[i] += moneta;
    } else {
      continue;
    }
  }
  return search(arr);
}

search(nums);

if (wins.every((item) => item === priz)) {
  console.log('True');
} else {
  console.log('False');
}
