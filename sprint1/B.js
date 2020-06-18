const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
const input = [];

rl.on('line', (line) => {
  i++;

  input.push(line);

  if (i === 2) {
    console.log(B());
    rl.close();
  }
});

function B() {
  const [list, k] = input;
  const map = new Map();

  for (let v of list) {
    if (v === ' ') continue;
    if (!map.has(v)) {
      map.set(v, 1);
    } else {
      map.set(v, map.get(v) + 1);
    }
  }

  const entries = [...map.entries()];

  for (let i = 0; i < entries.length - 1; i++) {
    for (let j = 0; j < entries.length - 1 - i; j++) {
      const a = entries[j + 1];
      const b = entries[j];

      if (a[1] > b[1]) {
        [a, b] = [b, a];
      }
    }
  }

  entries.length = k;

  return entries.map((arr) => arr[0]).join(' ');
}
