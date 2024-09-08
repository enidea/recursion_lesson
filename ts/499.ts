function missingItems(listA: number[], listB: number[]): number[] {
  const listBUniqueSet = new Set();

  for (const itemB of listB) {
    listBUniqueSet.add(itemB);
  }

  return listA.filter((itemA) => !listBUniqueSet.has(itemA));
}
