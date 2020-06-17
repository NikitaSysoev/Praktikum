const rl = require('../rl');

rl.on('line', (line) => {
  console.log(A(line));
  rl.close();
});

// Сложность алгоритма O(1).
// Количество элементарный операций не зависит от значений переменных x, y, c
function A(str) {
  const [a, x, b, c] = str.split(' ').map(Number);
  return Math.pow(x, 2) * a + b * x + c;
}
