const GAMES_TO_WIN_SET = 6;
const SETS_TO_WIN_MATCH = 2;

function updateMatchResult(match){
  let playerA = match.players[0];
  let playerB = match.players[1];
  let result = winGame(playerA.points, playerB.points);
  if(result == null){
    return;
  }
  let gameWinner = result ? playerB : playerA;
  gameWinner.games ++;
  gameWinner.gamesWon ++;
  playerA.points = 0;
  playerB.points = 0;
  
  result = winSet(playerA.games, playerB.games);
  if(result === null){
    return;
  }
  let setWinner = result ? playerB : playerA;
  setWinner.sets ++;
  playerA.games = 0;
  playerB.games = 0;

  result = winMatch(playerA.sets, playerB.sets);
  if(result === null){
    return;
  }
  match.winner = result;
}

function winGame(winPointsA, winPointsB){
  if(winPointsA > 3 || winPointsB > 3){
    if(Math.abs(winPointsA - winPointsB) >= 2){
      return winPointsA > winPointsB ? 0 : 1;
    }
  }
  return null;
}

function winSet(winGamesA, winGamesB){
  return win(winGamesA, winGamesB, GAMES_TO_WIN_SET)
}

function winMatch(winSetsA, winSetsB){
  return win(winSetsA, winSetsB, SETS_TO_WIN_MATCH)
}

function win(a, b, pointsToWin){
  if(a < pointsToWin && b < pointsToWin){
    return null;
  }
  else{
    return a === pointsToWin ? 0 : 1;
  }
}

module.exports = updateMatchResult;