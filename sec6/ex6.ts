const isSubsequence = (str1: string, str2: string) => {
  let p1 = 0;
  if (!str1) return true;
  if (!str2) return false;

  for (let p2 = 0; p2 < str2.length; p2++) {
    if (str1[p1] === str2[p2] && p1 < str1.length) p1++;
  }

  return p1 === str1.length;
};

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
