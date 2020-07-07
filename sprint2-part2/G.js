const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

function G(s) {
  const charCode = s.charCodeAt();

  if (charCode === 97) {
    return 'a';
  }

  return (
    G(String.fromCharCode(charCode - 1)) + ' ' + String.fromCharCode(charCode)
  );
}

console.log(G(input[0]));
