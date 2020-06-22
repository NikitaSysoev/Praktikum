const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  C(line);
  process.exit(0);
});

function C(line) {
  let result =''
  for (let x of line) {
    if(!result.includes(x)){
      result += x; 
    }
  }
  console.log(result.length);
}
