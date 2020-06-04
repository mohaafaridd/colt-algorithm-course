var flatten = function (input) {
    var flat = [];
    function helper(entry) {
        if (entry.length === 0)
            return flat;
        if (typeof entry[0] === "number") {
            flat.push(entry[0]);
            return helper(entry.slice(1));
        }
        else {
            return helper(entry[0]);
        }
    }
    var f = helper(input);
    console.log("f", f);
    return flat;
};
// console.log(flatten([1, 2, [3, 4, [5]]]));
// console.log(
//   "flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])",
//   flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])
// );
console.log("flatten([1, [2, [3, 4], [[5]]]])", flatten([1, [2, [3, 4], [[5]]]]));
//# sourceMappingURL=flatten.js.map