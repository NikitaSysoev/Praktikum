const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const set = new Set();

let longestOverAll = '';
let longestTillNow = '';

for (let s of input[0]) {
  if (set.has(s)) {
    longestTillNow = '';
    set.clear();
  }
  longestTillNow += s;
  set.add(s);
  if (longestTillNow.length > longestOverAll.length) {
    longestOverAll = longestTillNow;
  }
}

console.log(longestOverAll.length);
