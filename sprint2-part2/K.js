function mabs(x) {
  return x < 0 ? -x : x;
}

function main() {
  let num = 2;
  let rootDegree = 2;

  let eps = 0.001; //допустимая погрешность
  let root = num / rootDegree; //начальное приближение корня
  let rn = num; //значение корня последовательным делением
  let countiter = 0;

  while (mabs(root - rn) >= eps) {
    rn = num;
    for (let i = 1; i < rootDegree; i++) {
      rn = rn / root;
    }
    root = 0.5 * (rn + root);
    countiter++;
  }

  return root.toFixed(5);
}

console.log(main());
