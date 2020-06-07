var flatten = function (array, flatArr) {
    if (flatArr === void 0) { flatArr = []; }
    var flat = [];
    function helper(multilevel) {
        if (multilevel.length) {
            // If it's a number ( push and cut from the current multilevel )
            if (typeof multilevel[0] === "number") {
                flat.push(multilevel[0]);
            }
            // If it's an array pass as mutlilevel
            else {
                helper(multilevel[0]);
            }
            helper(multilevel.slice(1));
        }
    }
    helper(array);
    return flat;
    // const helper = (input) => {
    //   if (input.length) {
    //     typeof input[0] === "number" ? flatArr.push(input[0]) : helper(input[0]);
    //     helper(input.slice(1));
    //   }
    // };
    // helper(array);
    return flatArr;
};
console.log(flatten([1, 2, [3, 4, [5]]]));
console.log("flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])", flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
console.log("flatten([1, [2, [3, 4], [[5]]]])", flatten([1, [2, [3, 4], [[5]]]]));
//# sourceMappingURL=flatten.js.map