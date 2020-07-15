// O(n)
function sort(arr) {
  const newArr = [];
  while (arr.length) {
    const max = Math.max(...arr);
    newArr.push(max);
    const index = arr.indexOf(max);
    arr.splice(index, 1);
  }
  return newArr;
}

console.log(sort([4, 7, 1, 5, 9, 0, 3, 2, 8, 6]));

// O(n^^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let max = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }
    [arr[i], arr[max]] = [arr[max], arr[i]];
  }
  return arr;
}

// console.log(selectionSort([4, 7, 1, 5, 9, 0, 3, 2, 8, 6]));
