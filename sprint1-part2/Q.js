const readline = require('readline');
const Deck = require('../Deck');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let i = 0;

let n = 0;
let maxN = 0;
const commands = [];

rl.on('line', (line) => {
  i++;
  if (i === 1) {
    n = Number(line);
  }
  if (i === 2) {
    maxN = Number(line);
  }
  if (i > 2) {
    commands.push(line);
  }
  if (i === n + 2) {
    Q();
    rl.close();
  }
});

function Q() {
  //   const deck = new Deck(maxN);
  //   for (let str of commands) {
  //     const arr = str.split(' ');
  //     if (arr[0] === 'pop_front' || arr[0] === 'pop_back') {
  //       console.log(deck[arr[0]]());
  //     } else {
  //       const [fn, arg] = arr;
  //       deck[fn](arg);
  //     }
  //   }

  const deck = new Deck(10);
  deck['push_front'](-855);
  
  deck['push_front'](720);

  console.log(deck['pop_back']());
 
  console.log(deck['pop_back']());

  deck['push_back'](844);
  console.log(deck.queue)
  console.log(deck['pop_back']());
  deck['push_back'](823);
}
