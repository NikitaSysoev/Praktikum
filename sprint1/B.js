const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let list = '';

rl.on('line', (line) => {
  i++;

  if (i === 1) {
    list = line;
  }

  if (i === 2) {
    console.log(B(list, line));
    rl.close();
  }
});

function B(list, k) {
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

  return entries
    .map((arr) => arr[0])
    .slice(0, k)
    .join(' ');
}

function asc(a, b) {
  if (a[1] > b[1]) {
    return -1;
  }
  if (a[1] < b[1]) {
    return 1;
  }
  return 0;
}
