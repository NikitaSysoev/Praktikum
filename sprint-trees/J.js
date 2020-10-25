// obj0 = {
//   value: 9,
//   left: {
//     value: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     value: 7,
//     left: null,
//     right: null,
//   },
// };

// obj1 = {
//   value: 3,
//   left: {
//     value: 1,
//     left: {
//       value: 8,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 12,
//       left: {
//         value: 5,
//         left: null,
//         right: null,
//       },
//       right: null,
//     },
//   },
//   right: {
//     value: 4,
//     left: null,
//     right: null,
//   },
// };

function Solution(root) {
  const calc = (node) => {
    if (node === null) {
      return 0;
    }
    return Math.max(calc(node.left), calc(node.right)) + 1;
  };

  return calc(root);
}

// console.log(Solution(obj0));
