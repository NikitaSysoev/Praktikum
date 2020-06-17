const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
const words = [];

rl.on('line', (line) => {
  i++;

  words.push(line);

  if (i === 2) {
    console.log(G());
    rl.close();
  }
});

function G() {
  const [word1, word2] = words;
  const w1 = [...word1.toLowerCase()].sort().join('');
  const w2 = [...word2.toLowerCase()].sort().join('');
  return w1 === w2 ? 'True' : 'False';
}
