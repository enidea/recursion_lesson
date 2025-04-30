// One-pass solution
function largestRectangle(heights: number[]): number {
  const stack: number[] = [];
  let maxArea = 0;

  // Add sentinel value
  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      const top = stack.pop()!;
      const height = heights[top];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }

    stack.push(i);
  }

  return maxArea;
}

// Two-pass solution
// const calculateLeftSpans = (numbers: number[]) => {
//   const spans = new Array<number>(numbers.length);
//   const indexStack = new Array<number>();

//   for (let index = 0; index < numbers.length; index++) {
//     const currentNumber = numbers[index];
//     let span = 1;

//     while (
//       indexStack.length > 0 &&
//       currentNumber <= numbers[indexStack[indexStack.length - 1]]
//     ) {
//       // biome-ignore lint/style/noNonNullAssertion: <explanation>
//       span += spans[indexStack.pop()!];
//     }

//     indexStack.push(index);
//     spans[index] = span;
//   }

//   return spans;
// };

// function largestRectangle(heights: number[]): number {
//   const lefts = calculateLeftSpans(heights);
//   const rights = calculateLeftSpans([...heights].reverse()).reverse();

//   const rectangles: number[] = [];

//   for (let index = 0; index < heights.length; index++) {
//     rectangles.push(heights[index] * (lefts[index] + rights[index] - 1));
//   }

//   return Math.max(...rectangles);
// }
