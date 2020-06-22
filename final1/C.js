const readline = require('readline');
const { Stack } = require('../Stack');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  console.log(A(line));
  rl.close();
});

function A(str) {
  const stack = new Stack();
  const 

  for(let x of str){

  }
}
