// obj = {
//   value: 36,
//   left: {
//     value: 28,
//     left: {
//       value: 32,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 17,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     value: 54,
//     right: null,
//     left: {
//       value: 21,
//       left: null,
//       right: null,
//     },
//   },
// };

function Solution(root) {
  let queue = [];
  const values = [];
  queue.push(root);

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

// console.log(Solution(obj));
