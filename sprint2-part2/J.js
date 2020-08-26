const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const n = input[0];
const k = input[1];

function makeid(n, k) {
  const CHAR_SETS = {
    0: '01',
    1: '10',
  };
  let text = '0';

  for (let i = 0; i < n; i++) {
    text = [...text].map((item) => CHAR_SETS[item]).join('');
  }

  return text[k - 1];
}

console.log(makeid(k, n));
