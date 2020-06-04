const product = (array: number[]) => {
  let result = 1;

  const helper = (arr: number[]) => {
    if (arr.length === 0) return;
    result *= arr[0];
    helper(arr.slice(1));
  };

  helper(array);

  return result;
};

const prod = (array: number[]) =>
  array.length === 0 ? 1 : array[0] * prod(array.slice(1));

console.log("product([1,2,3])", product([1, 2, 3]));
console.log("product([1,2,3,10])", product([1, 2, 3, 10]));
