obj0 = {
  value: 1,
  left: {
    value: 3,
    left: null,
    right: null,
  },
  right: {
    value: 5,
    left: null,
    right: null,
  },
};

obj1 = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: null,
  },
  right: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 1,
      left: null,
      right: null,
    },
  },
};

function Solution(node) {
  const arr1 = [];
  const arr2 = []

  const calc = (node, prev = '') => {
    if (node === null) {
      return prev;
    }
    arr1.push(prev + String(node.value));
    arr2.push(prev + String(node.value))

    calc(node.left, prev);
    calc(node.right, prev);
  };

  calc(node);

  console.log(arr1)
  console.log(arr2)

//   return arr
//     .filter(Boolean)
//     .map(Number)
//     .reduce((acc, item) => acc + item);
}

console.log(Solution(obj1));
