function hasSameType(user1: string, user2: string): boolean {
  const getType = (user: string) => {
    const charCountMap = new Map<string, number>();
    const pattern = Array<number>();

    let prevChar = '.';

    for (const char of user) {
      charCountMap.set(char, (charCountMap.get(char) || 0) + 1);

      if (char !== prevChar) {
        pattern.push(1);
        prevChar = char;
      } else {
        pattern[pattern.length - 1] += 1;
      }
    }

    const sortedCharCounts = [...charCountMap.values()].sort((a, b) => a - b);

    return `${pattern.join('')}.${sortedCharCounts.join('')}`;
  };

  return getType(user1) === getType(user2);
}
