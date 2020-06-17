const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;
let fn = B;
fn.i = 0;

rl.on('line', (line) => {
  i++;
  const arr = line.split(' ').map(Number);

  if (i === 1) {
    fn = fn(arr);
  }

  if (i === 2) {
    fn(arr[0]);
    rl.close();
  }
});

function B(M) {
  return (k) => {
    const result = [];
    M.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    
    for(let i=1; i<=k; i++){
      M.filter((value) =>value === i).length
    }
  };
}
