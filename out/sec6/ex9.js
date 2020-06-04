var findLongestSubstring = function (string) {
    if (string.length === 0)
        return 0;
    var array = string.split("");
    var current = 0;
    var counter = 0;
    var distinct = [];
    var container = {};
    while (current < array.length) {
        if (container[array[counter + current]] || !array[counter + current]) {
            distinct.push(counter);
            current++;
            counter = 0;
            container = {};
        }
        else if (!!array[counter + current]) {
            container[array[counter + current]] = 1;
            counter++;
        }
    }
    var max = distinct.reduce(function (acc, current) { return Math.max(acc, current); }, 0);
    return max;
};
// console.log(findLongestSubstring("rithmschool"));
// console.log(findLongestSubstring("thisisawesome"));
// console.log(findLongestSubstring("bbbbbbbbbbb"));
console.log(findLongestSubstring("longestsubstring"));
//# sourceMappingURL=ex9.js.map