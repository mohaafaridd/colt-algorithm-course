const fib = (num: number, memo: number[] = []): number => {
  if (memo[num] !== undefined) return memo[num];
  else if (num <= 2) return 1;
  const result = fib(num - 1, memo) + fib(num - 2, memo);
  memo[num] = result;
  // console.log('memo', memo);
  return result;
};

console.log('fib(20)', fib(20));

export {};
