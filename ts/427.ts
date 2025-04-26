function stockSpan(stocks: number[]): number[] {
  const stack: number[] = [];
  const spans: number[] = [];

  stocks.forEach((stock, index) => {
    while (stack.length > 0 && stock > stocks[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length === 0) {
      spans.push(index + 1);
    } else {
      spans.push(index - stack[stack.length - 1]);
    }

    stack.push(index);
  });

  return spans;
}
