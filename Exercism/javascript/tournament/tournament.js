export const tournamentTally = (input = '') => {
  const HEADER = 'Team                           | MP |  W |  D |  L |  P';

  if (input.length === 0) return HEADER;

  const teams = {};
  const matches = input.split('\n');

  matches.forEach((match) => {
    const [ teamA, teamB, result ] = match.split(';');

    teams[teamA] = updateTeamStats(teams[teamA], result);
    teams[teamB] = updateTeamStats(teams[teamB], flipResult(result));
  });

  const sortedTeams = Object.entries(teams).sort(([teamA, statsA], [teamB, statsB]) => {
    if (statsB.P !== statsA.P) return statsB.P - statsA.P;

    return teamA.localeCompare(teamB);
  });

  return HEADER + '\n' + sortedTeams.map(([team, stats]) => team.padEnd(31, ' ')
      + `|  ${stats.MP} |  ${stats.W} |  ${stats.D} |  ${stats.L} |`
      + String(stats.P).padStart(3, ' ')).join('\n')
};

const updateTeamStats = (team = { MP: 0, W: 0, D: 0, L: 0, P: 0 }, result = '') => {
  switch (result) {
    case 'win':
      return { ...team, MP: team.MP + 1, W: team.W + 1, P: team.P + 3 };
    case 'draw':
      return { ...team, MP: team.MP + 1, D: team.D + 1, P: team.P + 1 };
    case 'loss':
      return { ...team, MP: team.MP + 1, L: team.L + 1 };
    default:
      return team;
  }
};

const flipResult = (result) => {
  if (result === 'win') return 'loss';
  if (result === 'loss') return 'win';

  return result;
}
