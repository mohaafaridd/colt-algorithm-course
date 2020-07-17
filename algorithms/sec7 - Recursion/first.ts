const countDown = (n: number) => {
  if (n === 0) {
    console.log("All Done");
    return;
  }

  console.log("Number:", n);
  n--;
  countDown(n);
};

countDown(3);
