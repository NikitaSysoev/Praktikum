const fs = require('fs');
const os = require('os');

function solution(lines) {
  let first = lines[0].split(' ');
  let second = lines[1].split(' ');

  let totalBudget = Number(first[1]);
  let housePrices = second.map((price) => Number(price));

  housePrices.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < housePrices.length; i++) {
    if (totalBudget <= 0 || totalBudget < housePrices[i]) {
      break;
    }
    totalBudget -= housePrices[i];
    count++;
  }

  console.log(count);
}

const lines = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);
solution(lines);
