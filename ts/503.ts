function firstNonRepeating(s: string): number {
  const charInfo = new Map<string, { count: number; lastIndex: number }>();

  // [...s]で文字列を展開すると新しい配列を作成してしまうのでfor loopの方が効率的
  // for (const [index, char] of [...s].entries()) {
  //   repeatCounts.set(char, (repeatCounts.get(char) || 0) + 1);
  //   lastIndexes.set(char, index);
  // }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    charInfo.set(char, {
      count: (charInfo.get(char)?.count || 0) + 1,
      lastIndex: i,
    });
  }

  for (const { count, lastIndex } of charInfo.values()) {
    if (count === 1) {
      return lastIndex;
    }
  }

  return -1;
}
