var fib = function (num) {
    if (num <= 2)
        return 1;
    else
        return fib(num - 1) + fib(num - 2);
};
console.log("fib(4)", fib(4));
console.log("fib(10)", fib(10));
console.log("fib(28)", fib(28));
console.log("fib(35)", fib(35));
//# sourceMappingURL=fibo.js.map