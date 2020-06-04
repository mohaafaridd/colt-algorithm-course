const minSubArrayLen = (array: number[], target: number) => {
  let total = -Infinity;
  let head = 0;
  let tail = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] > total) {
      total = array[index];
      head = index + 1;
      tail = index - 1;
    }
  }

  while (total < target) {
    // head and tail in center
    if (head < array.length && tail > -1) {
      let temp1 = total + array[head];
      let temp2 = total + array[tail];
      if (temp1 === target) {
        total += array[head];
        head++;
      } else if (temp2 === target) {
        total += array[tail];
        tail--;
      } else {
        if (array[head] > array[tail]) {
          total += array[head];
          head++;
        } else {
          total += array[tail];
          tail--;
        }
      }
    }
    // head is at the end
    else if (head === array.length && tail > -1) {
      total += array[tail];
      tail--;
    }
    // tail is at the rear
    else if (tail === -1 && head < array.length) {
      // console.log("head", head);
      total += array[head];
      head++;
    } else {
      return 0;
    }
  }

  return head - tail - 1;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
