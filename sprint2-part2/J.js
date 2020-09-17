const fs = require('fs');
const os = require('os');
const [n, k] = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

function makeid(n, k, text = '0') {
  if (text[k - 1]) {
    return text[k - 1];
  }
  text = text.split('0').join('0x');
  text = text.split('1').join('10');
  text = text.split('x').join('1');

  if (text[k - 1]) {
    return text[k - 1];
  }

  return makeid(n - 1, k, text);
}

console.log(makeid(n, k));
