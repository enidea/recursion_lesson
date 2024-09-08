function winnerPairOfCards(player1: string[], player2: string[]): string {
  const ALPHABET_TO_RANK_MAP = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  const getSortedPairs = (cards: string[]) => {
    const rankCounts = new Map<number, number>();

    for (const card of cards) {
      const rankPart = card.slice(1);
      const rank = Number(ALPHABET_TO_RANK_MAP[rankPart] || rankPart);

      rankCounts.set(rank, (rankCounts.get(rank) || 0) + 1);
    }

    return [...rankCounts.entries()]
      .map(([rank, count]) => {
        return { rank, count };
      })
      .sort((a, b) => {
        if (a.count === b.count) {
          return b.rank - a.rank;
        }

        return b.count - a.count;
      });
  };

  const player1Pairs = getSortedPairs(player1);
  const player2Pairs = getSortedPairs(player2);

  for (let i = 0; i < Math.min(player1Pairs.length, player2Pairs.length); i++) {
    const player1Pair = player1Pairs[i];
    const player2Pair = player2Pairs[i];

    const areCountsEqual = player1Pair.count === player2Pair.count;

    if (areCountsEqual && player1Pair.rank === player2Pair.rank) {
      continue;
    }

    if (
      player1Pair.count > player2Pair.count ||
      (areCountsEqual && player1Pair.rank > player2Pair.rank)
    ) {
      return 'player1';
    }

    return 'player2';
  }

  return 'draw';
}
