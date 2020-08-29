// obj2 = {
//   value: 1,
//   left: {
//     value: 2,
//     right: {
//       value: 5,
//       left: null,
//       right: null,
//     },
//     left: {
//       value: 4,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     value: 3,
//     left: {
//       value: 8,
//       left: {
//         value: 17,
//         left: null,
//         right: null,
//       },
//       right: null,
//     },
//     right: {
//       value: 10,
//       left: {
//         value: 14,
//         left: null,
//         right: null,
//       },
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
    return values.map((item) => item.slice(0, 1)).flat(Infinity);
}

// console.log(Solution(obj2));
