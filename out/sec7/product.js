var product = function (array) {
    var result = 1;
    var helper = function (arr) {
        if (arr.length === 0)
            return;
        result *= arr[0];
        helper(arr.slice(1));
    };
    helper(array);
    return result;
};
var prod = function (array) {
    return array.length === 0 ? 1 : array[0] * prod(array.slice(1));
};
console.log("product([1,2,3])", product([1, 2, 3]));
console.log("product([1,2,3,10])", product([1, 2, 3, 10]));
//# sourceMappingURL=product.js.map