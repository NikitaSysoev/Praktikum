// O(n +k)
function countingSort(array) {
  return array
    .reduce((acc, v) => {
      if (!acc[v]) {
        acc[v] = 0;
      }
      acc[v] = acc[v] + 1;
      return acc;
    }, [])
    .reduce((acc, v, i) => {
      if (v != null) {
        acc = acc.concat(Array(v).fill(i));
      }
      return acc;
    }, []);
}

console.log(countingSort([2, 4, 3, 5, 6, 0]));

module.exports = countingSort;
