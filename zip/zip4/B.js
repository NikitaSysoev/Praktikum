function Solution(node) {
  let max = -Infinity;
  const getMaxPath = (node) => {
    if (!node) {
      return 0;
    }
    const left = Math.max(getMaxPath(node.left), 0);
    const right = Math.max(getMaxPath(node.right), 0);
    max = Math.max(left + right + node.value, max);
    return Math.max(left, right) + node.value;
  };
  getMaxPath(node);
  return max;
}
// 39302911