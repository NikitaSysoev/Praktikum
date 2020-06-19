const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  console.log(E(line));
  rl.close();
});

// function E(num) {
//   return Number(num).toString(2);
// }

function E(line){
  return transformToBinary(Number(line));
}

function transformToBinary (number) {
  const divider = 2;
  let binaryNumber = ``;
  
  while (number > 0) {
    binaryNumber += number % divider;
    number = parseInt(number / divider);
  }
  
  return binaryNumber.split(``).reverse().join(``); 
}
