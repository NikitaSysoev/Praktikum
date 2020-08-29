// obj1 = {
//   value: 1,
//   left: {
//     value: 2,
//     left: {
//       value: 4,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 3,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     value: 2,
//     left: {
//       value: 3,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 4,
//       left: null,
//       right: null,
//     },
//   },
// };

// obj2 = {
//   value: 1,
//   left: {
//     value: 2,
//     left: {
//       value: 3,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 4,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     value: 2,
//     left: {
//       value: 3,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 4,
//       left: null,
//       right: null,
//     },
//   },
// };

function Solution(node) {
  function calc(node1, node2) {
    if (node1 === node2) return true;
    if (node1 === null) return false;
    if (node2 === null) return false;

    if (node1.value !== node2.value) {
      return false;
    }

    if (!calc(node1.left, node2.right)) return false;
    if (!calc(node1.right, node2.left)) return false;

    return true;
  }
  return calc(node.left, node.right) ? 'True' : 'False';
}

// console.log(Solution(obj2));
