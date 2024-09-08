function shuffleSuccessRate(arr: number[], shuffledArr: number[]): number {
  const mismatchCount = arr.reduce((count, productNumber, index) => {
    return count + (productNumber !== shuffledArr[index] ? 1 : 0);
  }, 0);

  return Math.floor((mismatchCount / arr.length) * 100);
}
