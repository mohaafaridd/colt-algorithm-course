var countDown = function (n) {
    if (n === 0) {
        console.log("All Done");
        return;
    }
    console.log("Number:", n);
    n--;
    countDown(n);
};
countDown(3);
//# sourceMappingURL=first.js.map