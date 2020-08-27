// удалить элементы из масива не используя доп памяти
function removeTarget(arr, value) {
  let step = 0;

  while (step !== arr.length) {
    if (arr[step] === value) {
      arr.splice(step, 1);
    } else {
      step++;
    }
  }

  return arr;
}
