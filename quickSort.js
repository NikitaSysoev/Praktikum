function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const [head, ...tail] = array;
  const left = tail.filter((i) => i <= head);
  const right = tail.filter((i) => i > head);

  return quickSort(left).concat(head, quickSort(right));
}

module.exports = quickSort;
