var collectOddValues = function (arr) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var iterator = arr_1[_i];
        iterator % 2 > 0 && result.push(iterator);
    }
    return result;
};
console.log("collectOddValues([1,2,3,4,5,6,7,8,9,10])", collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//# sourceMappingURL=helpers.js.map