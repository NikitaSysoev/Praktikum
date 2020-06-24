const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

const list = input[0].split(' ').map(Number);
const k = Number(input[1]);

const map = {};

for (let v of list) {
  if (v === ' ') continue;
  if (!map[v]) {
    map[v] = 1;
  } else {
    map[v] = map[v] + 1;
  }
}

const entries = Object.entries(map).sort(asc);

const result = entries
  .map((arr) => arr[0])
  .slice(0, k)
  .join(' ');

console.log(result);

function asc(a, b) {
  if (a[1] > b[1]) {
    return -1;
  }
  if (a[1] < b[1]) {
    return 1;
  }
  return 0;
}
