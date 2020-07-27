const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const [w1, w2] = input;
const map = new Map();

for (let s of w1) {
  map.set(s, (map.get(s) || 0) + 1);
}

let result = null;

for (let s of w2) {
  if (!map.get(s)) result = 'False';
  map.set(s, (map.get(s) || 0) - 1);
}

result = [...map.values()].every((i) => i === 0) ? 'True' : 'False';

console.log(result);
