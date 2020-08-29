// obj0 = {
//   value: 1,
//   left: null,
//   right: {
//     value: 0,
//     left: null,
//     right: null,
//   },
// };

// obj1 = {
//   value: 1,
//   left: {
//     value: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     value: 0,
//     left: null,
//     right: null,
//   },
// };

// obj2 = {
//   value: 1,
//   left: {
//     value: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     value: 0,
//     left: {
//       value: 3,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 6,
//       left: null,
//       right: null,
//     },
//   },
// };

// obj3 = {
//   value: 0,
//   left: {
//     value: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     value: 7,
//     left: {
//       value: 4,
//       left: {
//         value: 12,
//         left: null,
//         right: null,
//       },
//       right: null,
//     },
//     right: {
//       value: 8,
//       left: null,
//       right: null,
//     },
//   },
// };

function Solution(root) {
  if (root === null) {
    return 'False';
  }
  if (root.left === null && root.right === null) {
    return 'False';
  }
  function calc(root) {
    let queue = [];
    const values = [];
    if (root !== null) {
      queue.push(root);
    }

    while (queue.length > 0) {
      const result = queue.map((item) => item.value);
      values.push(result);
      const arr = [...queue];
      queue = [];

      for (let node of arr) {
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
    return values;
  }

  const leftLength = calc(root.left).length;
  const rightLength = calc(root.right).length;

  const degree = Math.abs(leftLength - rightLength);

  return degree < 2 ? 'True' : 'False';
}

// console.log(Solution(obj3));
