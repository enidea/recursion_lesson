function largestRectangle(heights: number[]): number {
  const lefts = new Array<number>(heights.length);
  const stackForLeft = new Array<number>();

  for (let index = 0; index < heights.length; index++) {
    const height = heights[index];
    let left = 1;

    while (
      stackForLeft.length > 0 &&
      height <= heights[stackForLeft[stackForLeft.length - 1]]
    ) {
      left += lefts[stackForLeft.pop()!];
    }

    stackForLeft.push(index);
    lefts[index] = left;
  }

  const rights = new Array<number>(heights.length);
  const stackForRight = new Array<number>();

  for (let index = heights.length - 1; index >= 0; index--) {
    const height = heights[index];
    let right = 1;

    while (
      stackForRight.length > 0 &&
      height <= heights[stackForRight[stackForRight.length - 1]]
    ) {
      right += rights[stackForRight.pop()!];
    }

    stackForRight.push(index);
    rights[index] = right;
  }

  let result = 0;

  for (let index = 0; index < heights.length; index++) {
    const rectangle = heights[index] * (lefts[index] + rights[index] - 1);

    if (rectangle > result) {
      result = rectangle;
    }
  }

  return result;
}
