const factorial = (num: number) => (num === 1 ? 1 : num * factorial(--num));

console.log("factorial(3)", factorial(3));
console.log("factorial(4)", factorial(4));
console.log("factorial(5)", factorial(5));
console.log("factorial(6)", factorial(6));
console.log("factorial(7)", factorial(7));
