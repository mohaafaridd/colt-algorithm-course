const naiveSearch = (str: string, pattern: string) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      console.log(pattern[j], str[i + j]);
      if (pattern[j] !== str[i + j]) {
        console.log("BREAK");
        break;
      }

      if (j === pattern.length - 1) count++;
    }
  }

  return count;
};

console.log(naiveSearch("whatwhatnigga", "what"));
