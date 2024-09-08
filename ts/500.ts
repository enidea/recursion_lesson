function intersectionOfArraysRepeats(
  intList1: number[],
  intList2: number[],
): number[] {
  const list1Map = new Map();

  for (const value of intList1) {
    list1Map.set(value, (list1Map.get(value) ?? 0) + 1);
  }

  return intList2
    .filter((value) => {
      const count = list1Map.get(value) ?? 0;

      if (count === 0) {
        return false;
      }

      list1Map.set(value, count - 1);

      return true;
    })
    .sort((a, b) => a - b);
}
