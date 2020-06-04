const capitalizeFirst = (array: string[]) => {
  const capitalized: string[] = [];

  const helper = (input: string[]) => {
    if (input.length) {
      capitalized.push(
        input[0].charAt(0).toUpperCase() + input[0].substring(1)
      );
      input.slice(1);
    }
  };

  helper(array);
  return capitalized;
};

console.log(
  '["car", "taco", "banana"]',
  capitalizeFirst(["car", "taco", "banana"])
);
