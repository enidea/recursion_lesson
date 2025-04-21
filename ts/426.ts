const GAIN_PER_ROLL = 4;

const calcResult = (diceRolls: number[]) => {
  let result = 0;
  let rolls: number[] = [];

  for (let index = 0; index < diceRolls.length; index++) {
    if (index > 0 && diceRolls[index - 1] > diceRolls[index]) {
      result = 0;
      rolls = [];
    }

    result += GAIN_PER_ROLL;
    rolls.push(diceRolls[index]);
  }

  return { result, rolls };
};

function diceStreakGamble(
  player1: number[],
  player2: number[],
  player3: number[],
  player4: number[],
): string {
  const players = { player1, player2, player3, player4 };
  type Players = typeof players;
  type PlayerName = keyof Players;

  const winner: {
    result: number;
    name: PlayerName | undefined;
    rolls: number[];
  } = {
    result: 0,
    name: undefined,
    rolls: [],
  };

  for (const [playerName, diceRolls] of Object.entries(players) as [
    PlayerName,
    Players[PlayerName],
  ][]) {
    const result = calcResult(diceRolls);

    if (result.result > winner.result) {
      winner.result = result.result;
      winner.name = playerName;
      winner.rolls = result.rolls;
    }
  }

  if (!winner.name) {
    throw new Error('No winner');
  }

  return `Winner: Player ${winner.name.replace('player', '')} won $${winner.result} by rolling [${winner.rolls}]`;
}
