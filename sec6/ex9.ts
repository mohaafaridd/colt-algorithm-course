const findLongestSubstring = (string: string) => {
  if (string.length === 0) return 0;

  const array = string.split("");

  let current = 0;
  let counter = 0;
  let distinct = [];
  let container = {};

  while (current < array.length) {
    if (container[array[counter + current]] || !array[counter + current]) {
      distinct.push(counter);
      current++;
      counter = 0;
      container = {};
    } else if (!!array[counter + current]) {
      container[array[counter + current]] = 1;
      counter++;
    }
  }

  let max = distinct.reduce((acc, current) => Math.max(acc, current), 0);
  return max;
};

// console.log(findLongestSubstring("rithmschool"));
// console.log(findLongestSubstring("thisisawesome"));
// console.log(findLongestSubstring("bbbbbbbbbbb"));
console.log(findLongestSubstring("longestsubstring"));
