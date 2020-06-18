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
    console.log(L());
    rl.close();
  }
});

function L() {
  const [w1, w2] = words;
  const max = w1.length > w2.length ? w1 : w2;
  const etalon = w1.length > w2.length ? w2 : w1;

  for (let i = 0; i < max.length; i++) {
    const newWord = max.slice(0, i) + max.slice(i + 1);
    if (G(newWord, etalon) === true) {
      return max[i];
    }
  }
}

function G(word1, word2) {
  const w1 = [...word1.toLowerCase()].sort().join('');
  const w2 = [...word2.toLowerCase()].sort().join('');
  return w1 === w2;
}
