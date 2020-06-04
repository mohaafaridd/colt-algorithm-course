var sameFrequency = function (a, b) {
    var arr1 = a.toString().split("");
    var arr2 = b.toString().split("");
    if (arr1.length !== arr2.length)
        return false;
    var counter = {};
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var number = arr1_1[_i];
        counter[number] = (counter[number] || 0) + 1;
    }
    for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
        var number = arr2_1[_a];
        if (counter[number]) {
            counter[number] -= 1;
        }
        else
            return false;
    }
    return true;
};
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
//# sourceMappingURL=ex3.js.map