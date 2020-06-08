const slidingWindow = (array: Array<number>, number: number) => {
  if (array.length === 0) return null;
  let max = 0;
  let temp = 0;

  for (let index = 0; index < number; index++) {
    max += array[index];
  }

  temp = max;

  for (let i = number; i < array.length; i++) {
    temp = temp - array[i - number] + array[i];
    max = Math.max(max, temp);
  }

  console.log("max", max);
  return max;
};

slidingWindow([20, 1, 5, 9, 7, 21, 85, 2, 0, 87, 13, 68, 9, 12], 5);
