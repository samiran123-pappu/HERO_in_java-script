const obj = { a: 1, b: 2 };
const clone = Object.assign({}, obj);
const entries = Object.entries(obj);
const back = Object.fromEntries(entries);

Object.freeze(clone);

console.log({
  keys: Object.keys(obj),
  values: Object.values(obj),
  entries,
  back,
  frozen: Object.isFrozen(clone)
});
