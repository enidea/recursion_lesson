function minWindowArrK(intArr: number[], k: number): number[] {
  const result: number[] = [];
  const deque: number[] = [];

  for (let i = 0; i < intArr.length; i++) {
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    while (deque.length && intArr[deque[deque.length - 1]] > intArr[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(intArr[deque[0]]);
    }
  }

  return result;
}
