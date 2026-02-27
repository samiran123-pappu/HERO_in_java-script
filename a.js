const tree = {
    value: 1,
    children: [
        { value: 2, children: [] },
        { value: 3, children: [{ value: 4, children: [] }] }
    ]
}

function collectValues(node) {
  const values = [node.value];
  for (const child of node.children) {
    values.push(...collectValues(child));
  }
  return values;
}

console.log(collectValues(tree)); // [1, 2, 3, 4]