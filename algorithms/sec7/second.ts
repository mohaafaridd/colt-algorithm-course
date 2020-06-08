const sum = (num: number) => (num === 1 ? 1 : num + sum(num - 1));

console.log("sum(10)", sum(10));
