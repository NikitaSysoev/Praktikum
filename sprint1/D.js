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
    const arr = line.split(' ').map(Number);
    console.log(D(arr));
    rl.close();
  }
});

function D(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      --i;
    }
  }
  return arr.join(' ');
}
