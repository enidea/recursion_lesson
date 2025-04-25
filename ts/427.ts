function stockSpan(stocks: number[]): number[] {
  if (stocks.length === 0) {
    throw new Error('invalid inputs');
  }

  const results = [1];
  let min = stocks[0];
  let max = stocks[0];

  for (let index = 1; index < stocks.length; index++) {
    const preStock = stocks[index - 1];
    const stock = stocks[index];

    if (stock < min) {
      min = stock;
      results.push(1);
    } else if (stock > max) {
      max = stock;
      results.push(index + 1);
    } else if (preStock === stock) {
      results.push(results[results.length - 1]);
    } else {
      let result = 1;
      let current = index;

      while (current > 0) {
        current--;

        if (stock <= stocks[current]) {
          break;
        }

        result++;
      }

      results.push(result);
    }
  }

  return results;
}
