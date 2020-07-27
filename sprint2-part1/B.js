const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const prices = input[1].split(' ').map(Number);

let share = null;
let result = 0;

for (const [i, price] of prices.entries()) {
  const newList = prices.slice(i);
  if (share) {
    if (price > share && price > (prices[i + 1] || 0)) {
      result += price - share;
      share = null;
    }
  } else {
    if (newList.length === 1) break;
    let min = Math.min(...newList);
    if (price === min) {
      share = price;
    }
  }
}

console.log(result);
