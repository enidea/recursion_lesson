const calculateLeftSpans = (numbers: number[]) => {
  const spans = new Array<number>(numbers.length);
  const indexStack = new Array<number>();

  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];
    let span = 1;

    while (
      indexStack.length > 0 &&
      currentNumber <= numbers[indexStack[indexStack.length - 1]]
    ) {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      span += spans[indexStack.pop()!];
    }

    indexStack.push(index);
    spans[index] = span;
  }

  return spans;
};

function largestRectangle(heights: number[]): number {
  const lefts = calculateLeftSpans(heights);
  const rights = calculateLeftSpans([...heights].reverse()).reverse();

  const rectangles: number[] = [];

  for (let index = 0; index < heights.length; index++) {
    rectangles.push(heights[index] * (lefts[index] + rights[index] - 1));
  }

  return Math.max(...rectangles);
}
