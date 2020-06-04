var areAnagrams = function (str1, str2) {
    if (str1.length !== str2.length)
        return false;
    var counter1 = {};
    var counter2 = {};
    for (var _i = 0, str1_1 = str1; _i < str1_1.length; _i++) {
        var char = str1_1[_i];
        counter1[char] = (counter1[char] || 0) + 1;
    }
    for (var _a = 0, str2_1 = str2; _a < str2_1.length; _a++) {
        var char = str2_1[_a];
        counter2[char] = (counter2[char] || 0) + 1;
    }
    for (var char in counter1) {
        if (!(char in counter2))
            return false;
        if (counter1[char] !== counter2[char])
            return false;
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
//# sourceMappingURL=anagram.js.map