function largestRectangle(h: number[]): number {
  let result = 0;

  for (let index = 0; index < h.length; index++) {
    let height = h[index];

    while (height > 0) {
      let width = 1;

      for (const value of h.slice(0, index).reverse()) {
        if (value < height) {
          break;
        }

        width++;
      }

      const rectangle = height * width;

      if (rectangle > result) {
        result = rectangle;
      }

      height--;
    }
  }

  return result;
}
