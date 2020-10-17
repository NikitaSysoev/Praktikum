// sort js
function sort(arr) {
  return arr.sort((a, b) => b - a); // по убыванию
}

// сортировка пузырьком o(n^2) в худшем случае
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i].arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

// сортировка вставками
// the worst case O(n2) and best case O(n)
function insertionSort(arr){

}

// сортировка слиянием

// сортировка выбором

// быстрая сортировка

// подразрядная сортировка
function radixSort(arr){
  
}