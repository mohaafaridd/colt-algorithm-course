const collectOddValues = (arr: number[]) => {
  let result = [];

  for (const iterator of arr) {
    iterator % 2 > 0 && result.push(iterator);
  }

  return result;
};

console.log(
  "collectOddValues([1,2,3,4,5,6,7,8,9,10])",
  collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
