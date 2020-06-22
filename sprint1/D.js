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
  let prevZero = false;
  for (let s of line) {
    if (s !== '0') {
      if (prevZero === true) {
        prevZero = false;
      } else {
        result += s;
      }
    } else {
      prevZero = true;
    }
  }
  console.log(result);
}
