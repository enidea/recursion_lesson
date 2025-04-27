function minWindowArrK(intArr: number[], k: number): number[] {
  const result = new Array<number>();

  const length = intArr.length;
  let index = 0;

  while (length - index + 1 > k) {
    result.push(Math.min(...intArr.slice(index, index + k)));
    index++;
  }

  return result;
}
