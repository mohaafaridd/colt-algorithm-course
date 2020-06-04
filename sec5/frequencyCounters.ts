const same = (array1: Array<number>, array2: Array<number>) => {
  if (array1.length !== array2.length) return false;

  const counter1 = {};
  // const counter2 = {};

  for (const number of array1) {
    counter1[number] = (counter1[number] || 0) + 1;
  }

  // for (const number of array1) {
  //   counter2[number ** 2] = (counter2[number ** 2] || 0) + 1;
  // }

  for (const key in counter1) {
    const numericKey = Number(key);
    // if (!(numericKey ** 2 in counter2)) return false;
    // if (counter1[numericKey] !== counter2[numericKey ** 2]) return false;
    if (!counter1[numericKey]) return false;
    else counter1[numericKey] -= 1;
  }
  return true;
};

const isSame = same([1, 2, 3], [9, 4, 1]);
console.log(isSame ? "Same" : "Not the same");
