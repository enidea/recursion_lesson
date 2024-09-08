function findXTimes(teams: string): boolean {
  const teamMatchCountMap = new Map<string, number>();

  for (const team of teams) {
    teamMatchCountMap.set(team, (teamMatchCountMap.get(team) || 0) + 1);
  }

  const teamMatchCounts = [...teamMatchCountMap.values()];
  const firstTeamMatchCount = teamMatchCounts[0];

  return teamMatchCounts.every((count) => count === firstTeamMatchCount);
}
