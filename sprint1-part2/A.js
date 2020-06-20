const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let stop = 0;
const list = [];

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    stop = Number(line) + 1;
  }
  if (i > 1) {
    list.push(line);
  }
  if (i === stop) {
    A();
    rl.close();
  }
});

function A() {
  const set = new Set(list);
  for (let item of mySet.values()) console.log(item);
}
