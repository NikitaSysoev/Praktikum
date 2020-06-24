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
    D(line);
    rl.close();
  }
});

function D(line) {
  let result = '';
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '0') {
      continue;
    }
    if (line[i] === ' ' && line[i - 1] === '0') {
      continue;
    }
    if (line[i] === ' ' && line[i + 1] === '0' && i + 1 === line.length) {
      continue;
    }
    result += line[i];
  }
  console.log(result);
}
