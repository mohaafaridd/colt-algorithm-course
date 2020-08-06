const fib = (num: number) => (num <= 2 ? 1 : fib(num - 1) + fib(num - 2))

console.log('fib(0)', fib(0))
console.log('fib(4)', fib(4))
console.log('fib(10)', fib(10))
console.log('fib(28)', fib(28))
console.log('fib(35)', fib(35))
