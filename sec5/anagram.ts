const areAnagrams = (str1: string, str2: string) => {
  if (str1.length !== str2.length) return false;

  const counter1 = {};
  const counter2 = {};

  for (const char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }

  for (const char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }

  for (const char in counter1) {
    if (!(char in counter2)) return false;
    if (counter1[char] !== counter2[char]) return false;
  }

  return true;
};

console.log(areAnagrams("", ""));
console.log(areAnagrams("aaz", "zza"));
console.log(areAnagrams("anagram", "nagaram"));
console.log(areAnagrams("rat", "car"));
console.log(areAnagrams("awesome", "awesom"));
console.log(areAnagrams("qwerty", "qeywrt"));
console.log(areAnagrams("texttwisttime", "texttwisttime"));
