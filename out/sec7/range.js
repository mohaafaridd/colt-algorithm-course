var recursiveRange = function (number) {
    return number === 0 ? 0 : (number += recursiveRange(number - 1));
};
console.log("recursiveRange(6)", recursiveRange(6));
console.log("recursiveRange(10)", recursiveRange(10));
//# sourceMappingURL=range.js.map