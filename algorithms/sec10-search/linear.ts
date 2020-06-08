const linearSearch = (arr: number[], num: number) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === num) return index;
  }

  return -1;
};

console.log(linearSearch([1, 2, 3, 4], 5));
