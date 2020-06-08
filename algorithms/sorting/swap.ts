export const swap = (array: number[], i: number, j: number) => {
  [array[i], array[j]] = [array[j], array[i]];
};
