const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let w1 = '';

rl.on('line', (line) => {
  i++;

  if (i === 1) {
    w1 = line;
  }

  if (i === 2) {
    console.log(G(w1, line));
    rl.close();
  }
});

function G(w1, w2) {
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
}
