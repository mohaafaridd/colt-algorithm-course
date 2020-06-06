const swap = (array: number[], i: number, j: number) => {
  [array[i], array[j]] = [array[j], array[i]];
};

const sort = (array: number[]) => {
  let noSwaps = true;
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return array;
};

const array = [8, 1, 2, 3, 4, 5, 6, 7];
console.log("sort(array)", sort(array));
