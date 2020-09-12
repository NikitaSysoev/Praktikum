const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const hash = {};
let str = input[0];
let start, end, bestStart, best;
start = end = bestStart = best = 0;

while (end < str.length) {

  while (hash[str[end]]) {
    hash[str[start++]] = 0;
  }

  hash[str[end]] = 1;

  if (++end - start > best) {
    bestStart = start;
    best = end - start;
  }

}
console.log(str.substr(bestStart, best).length);
