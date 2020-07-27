const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
const server1 = [];
const server2 = [];

rl.on('line', (line) => {
  i++;

  if (i === 1) {
    server1.push(...line.split(' '));
  }

  if (i === 4) {
    server2.push(...line.split(' '));
    console.log(O1());
    rl.close();
  }
});

function O1() {
  server1.push(...server2);

  for (let i = server1.length - 1; i >= 0; i--) {
    if (server1[i] === '0') {
      server1.splice(i, 1);
    }
    server1[i] = Number(server1[i]);
  }

  server1.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  return server1.join(' ');
}

function O2() {
  return server1
    .concat(server2)
    .map(Number)
    .filter((x) => x !== 0)
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
    .join(' ');
}
