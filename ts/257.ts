function shuffledPositions(arr: number[], shuffledArr: number[]): number[] {
  const shuffledNumberToIndexMap = new Map(
    shuffledArr.map((number, index) => [number, index]),
  );

  return arr.map((number) => shuffledNumberToIndexMap.get(number) ?? 0);
}
