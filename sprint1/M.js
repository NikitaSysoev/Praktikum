const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  console.log(M(line));
  rl.close();
});

function M(line) {
  const map = new Map();
  line = alphabetize(line);
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

  return entries.map((arr) => arr[0].repeat(arr[1])).join('');
}

function alphabetize(str) {
  return str.split('').sort().join('');
}
