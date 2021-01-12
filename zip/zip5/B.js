const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

const MAX_TABLE_SIZE = 1000;
const PRIME_NUMBER = 1009;
const koeffA = 1 + Math.floor(Math.random() * (PRIME_NUMBER - 1));
const koeffB = Math.floor(Math.random() * (PRIME_NUMBER - 1));

class HashTable {
  constructor() {
    this.table = new Array(1000).fill(null);
  }

  calcHash(key) {
    return ((koeffA * key + koeffB) % PRIME_NUMBER) % MAX_TABLE_SIZE;
  }

  find(key, node) {
    while (node) {
      if (node.key === key) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  put(key, value) {
    const index = this.calcHash(key);

    if (this.table[index] !== null) {
      const parent = this.table[index];
      let node = this.find(key, parent);
      if (node === null) {
        node = new Node(key, value);
        node.next = parent;
        this.table[index] = node;
      } else {
        node.value = value;
      }
    } else {
      this.table[index] = new Node(key, value);
    }
  }

  delete(key) {
    let index = this.calcHash(key);
    if (this.table[index] === null) {
      return 'error';
    }
    let node = this.table[index];
    let prev = null;
    while (node) {
      if (node.key === key) {
        if (prev) {
          prev.next = node.next;
        } else {
          this.table[index] = node.next;
        }
        return 'ok';
      }
      prev = node;
      node = node.next;
    }
    return 'error';
  }

  get(key) {
    let index = this.calcHash(key);
    const node = this.find(key, this.table[index]);
    if (node) {
      return node.value;
    } else {
      return -1;
    }
  }
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

// 45562257
