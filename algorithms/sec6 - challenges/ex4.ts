const areThereDuplicates = (...args: number[] | string[]) => {
  if (args.length === 0) return false;

  let counter = {};

  for (const iterator of args) {
    counter[iterator] = (counter[iterator] | 0) + 1;
    if (counter[iterator] > 1) return true;
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
