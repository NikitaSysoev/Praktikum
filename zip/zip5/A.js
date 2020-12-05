const fs = require('fs');
const os = require('os');
const lines = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const requestsNum = Number(lines[1]);

let idURL = Number(lines[0]);

const b = 62;
const base = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const store = new Map();

function encode(num) {
  let encStr = '';
  let q = num;

  while (q > 0) {
    r = q % b;
    q = Math.floor(q / b);
    encStr = base[r] + encStr;
  }
  return encStr;
}

function handlePostRequest(url) {
  if (store.has(url)) {
    return store.get(url);
  } else {
    const num = encode(idURL);
    idURL++;
    const shortUrl = 'https://prakti.kum/' + num;
    store.set(url, shortUrl);
    store.set(shortUrl, url);
    return shortUrl;
  }
}

function handleGetRequest(url) {
  if (store.has(url)) {
    return store.get(url);
  }
  return 'error';
}

for (let i = 2; i < requestsNum + 2; i++) {
  let request = lines[i].split(' ');
  let method = request[0];
  let url = request[1];

  if (method === 'post') {
    console.log(handlePostRequest(url));
  } else {
    console.log(handleGetRequest(url));
  }
}

// 43724481