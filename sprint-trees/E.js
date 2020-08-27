// const tree1 = {
//   value: 1,
//   left: {
//     value: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     value: 3,
//     left: null,
//     right: null,
//   },
// };

// const tree2 = {
//   value: 1,
//   left: {
//     value: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     value: 3,
//     left: null,
//     right: null,
//   },
// };

// const tree3 = {
//   value: 1,
//   left: {
//     value: 3,
//     left: null,
//     right: null,
//   },
//   right: null,
// };

// const tree4 = {
//   value: 1,
//   left: null,
//   right: {
//     value: 3,
//     left: null,
//     right: null,
//   },
// };

function Solution(node1, node2) {
  return JSON.stringify(node1) === JSON.stringify(node2) ? 'True' : 'False';
}

// console.log(Solution(tree1, tree2));
