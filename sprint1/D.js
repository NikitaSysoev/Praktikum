const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;

rl.on('line', (line) => {
  i++;
  if (i === 2) {
    console.log(D(line));
    rl.close();
  }
});

function D(line) {
  return line.replace(/ 0+/g, '');
}
