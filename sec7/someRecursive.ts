type Callback = (number: number) => boolean;

const isOdd: Callback = (val) => val % 2 !== 0;

const someRecursive = (numbers: number[], callback: Callback) => {
  if (numbers.length === 0) return false;
  else if (callback(numbers[0])) return true;
  else return someRecursive(numbers.slice(1), callback);
};

console.log(
  "someRecursive([1,2,3,4], isOdd)",
  someRecursive([1, 2, 3, 4], isOdd)
);
console.log(
  "someRecursive([4,6,8,9], isOdd)",
  someRecursive([4, 6, 8, 9], isOdd)
);
console.log("someRecursive([4,6,8], isOdd)", someRecursive([4, 6, 8], isOdd));
console.log(
  "someRecursive([4,6,8, 20], val => val > 10)",
  someRecursive([4, 6, 8, 9, 20], (val) => val > 10)
);
