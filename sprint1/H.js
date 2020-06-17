const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  console.log(H(line));
  rl.close();
});

function H(line) {
  const word = line.toLowerCase().replace(/[\. ,:-]+/g, '');
  return word === word.split('').reverse().join('') ? 'True' : 'False';
}
