const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const map = new Map();

const line = input[0].split('').sort().join('');

for (const x of line) {
  if (!map.has(x)) {
    map.set(x, 1);
  } else {
    map.set(x, map.get(x) + 1);
  }
}

const entries = [...map.entries()];

for (let i = 0; i < entries.length - 1; i++) {
  for (let j = 0; j < entries.length - 1 - i; j++) {
    const a = entries[j + 1];
    const b = entries[j];
    if (a[1] > b[1]) {
      [entries[j + 1], entries[j]] = [entries[j], entries[j + 1]];
    }
  }
}

const result = entries.map((arr) => arr[0].repeat(arr[1])).join('');

console.log(result);
