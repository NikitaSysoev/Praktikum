// obj = {
//   value: 1,
//   left: {
//     value: 3,
//     left: {
//       value: 8,
//       left: {
//         value: 14,
//         left: null,
//         right: null,
//       },
//       right: {
//         value: 15,
//         left: null,
//         right: null,
//       },
//     },
//     right: {
//       value: 10,
//       left: null,
//       right: {
//         value: 3,
//         left: null,
//         right: null,
//       },
//     },
//   },
//   right: {
//     value: 5,
//     right: {
//       value: 6,
//       left: {
//         value: 0,
//         left: null,
//         right: null,
//       },
//       right: {
//         value: 1,
//         left: null,
//         right: null,
//       },
//     },
//     left: {
//       value: -2,
//       left: null,
//       right: null,
//     },
//   },
// };

function solution(node) {
  const set = new Set();

  function calc(node) {
    set.add(node.value);

    if (node.left !== null) {
      calc(node.left);
    }

    if (node.right !== null) {
      calc(node.right);
    }
  }

  calc(node);

  return Math.max(...Array.from(set));
}

// console.log(solution(obj));
