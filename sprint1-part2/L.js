const readline = require('readline');
const { Stack } = require('../Stack');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  L(line);
  rl.close();
});

function L(line) {
  if (line === '') {
    console.log('True');
    return;
  }
  const stack = new Stack();

  const config = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  for (let s of line) {
    if (s in config) {
      stack.push(config[s]);
    } else {
      if (stack.isEmpty()) {
        console.log('False');
        return;
      }
      if (stack.peek() === s) {
        stack.pop();
      } else {
        console.log('False');
        return;
      }
    }
  }

  if (stack.isEmpty()) {
    console.log('True');
  } else {
    console.log('False');
  }
}
