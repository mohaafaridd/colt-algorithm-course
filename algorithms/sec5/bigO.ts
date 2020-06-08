export const loop = (number: number) => {
  let total = 0;
  for (let index = 0; index <= number; index++) {
    total += index;
  }
};

export const equation = (number: number) => (number * (number + 1)) / 2;
