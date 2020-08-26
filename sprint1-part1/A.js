const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const [a, x, b, c] = input[0].split(' ').map(Number);

// Сложность алгоритма O(1).
// O(1) дополнительной памяти
// Количество элементарный операций не зависит от значений переменных x, y, c
const result = Math.pow(x, 2) * a + b * x + c;
console.log(result);
