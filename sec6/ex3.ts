const sameFrequency = (a: number, b: number) => {
  const arr1 = a.toString().split("");
  const arr2 = b.toString().split("");

  if (arr1.length !== arr2.length) return false;
  const counter = {};

  for (const number of arr1) {
    counter[number] = (counter[number] || 0) + 1;
  }

  for (const number of arr2) {
    if (counter[number]) {
      counter[number] -= 1;
    } else return false;
  }

  return true;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
