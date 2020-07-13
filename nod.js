//Реализации алгоритмов/Алгоритм Евклида
const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));

// factorial
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

// формулу вычисления количества сочетаний из n по k.
function ckn(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

// алгоритм бинарного поиска
function binarySearch(arr, value, start = 0, end = arr.length - 1) {
  let midIndex = Math.floor((start + end) / 2);

  if (arr[midIndex] === value) {
    return midIndex;
  }

  if (start >= end) {
    return -1;
  }

  return value < arr[midIndex]
    ? binarySearch(arr, value, start, midIndex - 1)
    : binarySearch(arr, value, midIndex + 1, end);
}

// алгоритм возведения в степень
function MathPow(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n % 2) {
    return x * MathPow(x, n - 1);
  }
  return MathPow(x, n / 2) * MathPow(x, n / 2);
}
