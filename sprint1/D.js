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

// function D(line) {
//   const result = [];
//   for (let x of line) {
//     if (x !== '0') {
//       result.push(x);
//     }
//   }
//   console.log(result.join(''))
// }

function D(line) {
  let flag = false;
  const result = line
    .split(' ')
    .map((x) => {
      if (x.length > 1) {
        return [...x].filter((y) => y !== '0').join('');
      } else if (x !== '0') {
        return x;
      } 
    })
    .join(' ').split(' ');
  console.log(result);
}
