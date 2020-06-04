const power = (num: number, os: number) => {
  if (os === 1) {
    return num;
  } else if (os === 0) return 1;
  else return num * power(num, os - 1);
};

console.log("power(2,0)", power(2, 0));
console.log("power(2,2)", power(2, 2));
console.log("power(2,4)", power(2, 4));
console.log("power(3,3)", power(3, 3));
