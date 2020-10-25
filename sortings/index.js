// sort js
function sort(arr) {
  return arr.sort((a, b) => b - a); // по убыванию
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// сортировка пузырьком o(n^2) в худшем случае
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}

// сортировка выбором
function selectionSort(arr) {}

// сортировка вставками
// the worst case O(n2) and best case O(n)
function insertionSort(arr) {}

// быстрая сортировка
function quickSort(arr) {}

// сортировка слиянием
function mergeSort(arr) {}

// подразрядная сортировка*
function radixSort(arr) {}

// пирамидальная сортировка, сортировка кучей O(nlogn)
class HeapSort {
  constructor(arr) {
    this.arr = arr;
    const len = arr.length;

    this.buildHeap(len);

    let end = len - 1;
    while (end > 0) {
      this.swap(end--, 0);
      this.siftFown(0, end);
    }
  }

  get() {
    return this.arr;
  }

  swap(i, j) {
    let temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }

  buildHeap(len) {
    let mid = Math.floor((len - 2) / 2);
    while (mid >= 0) {
      siftDown(mid--, len - 1);
    }
  }

  siftFown(start, end) {
    let root = start,
      child = root * 2 + 1,
      toSwap = root;
    while (child <= end) {
      if (this.arr[toSwap] < this.arr[child]) {
        this.swap(toSwap, child);
      }
      if (child + 1 <= end && this.arr[toSwap] < this.arr[child + 1]) {
        this.swap(toSwap, child + 1);
      }
      if (toSwap != root) {
        this.swap(root, toSwap);
        root = toSwap;
      } else {
        return;
      }
      toSwap = root;
      child = root * 2 + 1;
    }
  }
}
