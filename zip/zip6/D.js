const fs = require('fs');
const os = require('os');
const [str] = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

function getMaxRep(str) {
  if (!str) {
    return;
  }

  const nxt = new Array(str.length).fill(0);

  for (let i = 1; i < nxt.length; i++) {
    let k = nxt[i - 1];
    while (true) {
      if (str[i] === str[k]) {
        nxt[i] = k + 1;
        break;
      } else if (k === 0) {
        nxt[i] = 0;
        break;
      } else {
        k = nxt[k - 1];
      }
    }
  }

  const smallPieceLen = str.length - nxt[nxt.length - 1];

  if (str.length % smallPieceLen !== 0) {
    return 1;
  }

  return str.length / smallPieceLen;
}

console.log(getMaxRep(str));

// 46479304