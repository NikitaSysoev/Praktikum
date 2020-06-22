const readline = require('readline');
const { MyQueue } = require('../Queue');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let str = '';
let template = '';

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    str = line;
  }
  if (i === 2) {
    template = line;
    O();
    rl.close();
  }
});

function O() {
  const q = new MyQueue(template.length);

  let count = 0;

  for (let s of str) {
    if (template.includes(s)) {
      q.put(s);
    }
    if (q.size === template.length) {
      count++;
      break;
    }
  }
}
