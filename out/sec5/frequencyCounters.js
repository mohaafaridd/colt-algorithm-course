var same = function (array1, array2) {
    if (array1.length !== array2.length)
        return false;
    var counter1 = {};
    // const counter2 = {};
    for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
        var number = array1_1[_i];
        counter1[number] = (counter1[number] || 0) + 1;
    }
    // for (const number of array1) {
    //   counter2[number ** 2] = (counter2[number ** 2] || 0) + 1;
    // }
    for (var key in counter1) {
        var numericKey = Number(key);
        // if (!(numericKey ** 2 in counter2)) return false;
        // if (counter1[numericKey] !== counter2[numericKey ** 2]) return false;
        if (!counter1[numericKey])
            return false;
        else
            counter1[numericKey] -= 1;
    }
    return true;
};
var isSame = same([1, 2, 3], [9, 4, 1]);
console.log(isSame ? "Same" : "Not the same");
//# sourceMappingURL=frequencyCounters.js.map