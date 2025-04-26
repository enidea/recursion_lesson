function stockSpan(stocks: number[]): number[] {
  const stack: number[] = [];
  const spans: number[] = new Array(stocks.length).fill(0);

  stocks.forEach((stock, index) => {
    while (stack.length > 0 && stock > stocks[stack[stack.length - 1]]) {
      stack.pop();
    }

    spans[index] =
      stack.length === 0 ? index + 1 : index - stack[stack.length - 1];

    stack.push(index);
  });

  return spans;
}
