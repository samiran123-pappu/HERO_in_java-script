tree = {
    "value": 1,
    "children": [
        {"value": 2, "children": []},
        {"value": 3, "children": [
            {"value": 4, "children": []}
        ]}
    ],
    "children1": [
        {"value1": 5, "children1": []},
        {"value1": 6, "children1": [
            {"value1": 7, "children1": []}
        ]}
    ],
    "value1": 8
}

function collectValues(node) {
  const values = [node.value];
  for (const child of node.children) {
    values.push(...collectValues(child));
  }
  return values;
}

console.log(collectValues(tree)); // [1, 2, 3, 4]