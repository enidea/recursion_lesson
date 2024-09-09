const ALPHABET_TO_RANK_MAP: Record<string, number> = {
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

type CardPair = { rank: number; count: number };

const getSortedPairs = (cards: string[]): CardPair[] => {
  const rankCounts = new Map<number, number>();

  for (const card of cards) {
    const rank = getRank(card);

    rankCounts.set(rank, (rankCounts.get(rank) || 0) + 1);
  }

  return [...rankCounts.entries()]
    .map(([rank, count]) => ({ rank, count }))
    .sort((a, b) => b.count - a.count || b.rank - a.rank);
};

const getRank = (card: string): number => {
  const rankPart = card.slice(1);
  return ALPHABET_TO_RANK_MAP[rankPart] || Number(rankPart);
};

type GameResult = 'player1' | 'player2' | 'draw';

const comparePairs = (pair1: CardPair, pair2: CardPair): GameResult => {
  if (pair1.count === pair2.count) {
    if (pair1.rank === pair2.rank) {
      return 'draw';
    }

    return pair1.rank > pair2.rank ? 'player1' : 'player2';
  }

  return pair1.count > pair2.count ? 'player1' : 'player2';
};

function winnerPairOfCards(player1: string[], player2: string[]): GameResult {
  const player1Pairs = getSortedPairs(player1);
  const player2Pairs = getSortedPairs(player2);

  for (let i = 0; i < Math.min(player1Pairs.length, player2Pairs.length); i++) {
    const result = comparePairs(player1Pairs[i], player2Pairs[i]);

    if (result !== 'draw') {
      return result;
    }
  }

  return 'draw';
}
