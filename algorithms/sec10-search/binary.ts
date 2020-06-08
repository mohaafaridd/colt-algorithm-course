const binary = (arr: number[], num: number) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== num && start <= end) {
    console.log(start, middle, end);
    if (arr[middle] > num) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }
  console.log(start, middle, end);

  return arr[middle] === num ? middle : -1;
};
console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 2));
