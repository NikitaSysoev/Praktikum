const fs = require('fs');
const [w1, w2] = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

const map = new Map();

for (let s of w1) {
  map.set(s, (map.get(s) || 0) + 1);
}

for (let s of w2) {
  if (!map.get(s)) return 'False';
  map.set(s, (map.get(s) || 0) - 1);
}

const result = [...map.values()].every((i) => i === 0);

return result ? 'True' : 'False';
