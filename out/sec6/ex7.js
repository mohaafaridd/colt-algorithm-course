var maxSubarraySum = function (array, slider) {
    if (array.length === 0)
        return false;
    var max = 0;
    var temp = 0;
    for (var i = 0; i < slider; i++) {
        max += array[i];
    }
    temp = max;
    for (var i = slider; i < array.length; i++) {
        temp = temp - array[i - slider] + array[i];
        max = Math.max(temp, max);
    }
    return isNaN(max) ? null : max;
};
console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, 2, 6, -1], 2));
console.log(maxSubarraySum([-3, 4, 0, 2, 6, -1], 4));
//# sourceMappingURL=ex7.js.map