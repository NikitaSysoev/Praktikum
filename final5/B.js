const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

function HashTable() {
  const store = [];

  this.get = (key) => {
    const result = store[key];
    if (result == null) {
      return -1;
    }
    return result;
  };

  this.put = (key, value) => {
    store[key] = value;
  };

  this.delete = (key) => {
    const result = store[key];
    if (result == null) {
      return 'error';
    }
    delete store[key];
    return 'ok';
  };
}

const hashTable = new HashTable();

for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(' ');

  switch (arr[0]) {
    case 'put':
      hashTable.put(Number(arr[1]), Number(arr[2]));
      break;
    case 'delete':
      console.log(hashTable.delete(Number(arr[1])));
      break;
    case 'get':
      console.log(hashTable.get(Number(arr[1])));
      break;
  }
}
