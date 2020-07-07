function findSum(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + findSum(arr.slice(1));
  }
}

console.log(findSum([1, 2, 3, 4, 5]));

function findSum1() {
  if (n === 0) {
    return 0;
  } else {
    return n + findSum1(n - 1);
  }
}
