var areThereDuplicates = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 0)
        return false;
    var counter = {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var iterator = args_1[_a];
        counter[iterator] = (counter[iterator] | 0) + 1;
        if (counter[iterator] > 1)
            return true;
    }
    return false;
};
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
//# sourceMappingURL=ex4.js.map