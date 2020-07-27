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
    console.log(Q(line));
    rl.close();
  }
});

function Q(line) {
  const array = line.split(' ').map(Number);

  for (let [keyArray, valueArray] of array.entries()) {
    const arr = array
      .slice(0, keyArray)
      .concat(array.slice(keyArray + 1, array.length));

    for (let [keyArr, valueArr] of arr.entries()) {
      const a = arr.slice(0, keyArr).concat(arr.slice(keyArr + 1, arr.length));

      for (let keyA of a) {
        if (sumArr([valueArray, valueArr, keyA]) === 0) {
          const res = multiplyArr([valueArray, valueArr, keyA]);
          return res > 0 ? res : -1;
        }
      }
    }
  }
}

function sumArr(arr) {
  return arr.reduce((total, item) => {
    return total + item;
  }, 0);
}

function multiplyArr(arr) {
  return arr.reduce((total, item) => {
    return total * item;
  }, 1);
}
