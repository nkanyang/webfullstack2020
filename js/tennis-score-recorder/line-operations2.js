const updateMatchResult = require("./get-winner");

class ScoreBoard{
  constructor(name){
    this.name = name;
    this.points = 0;
    this.games = 0;
    this.sets = 0;
    this.gamesWon = 0;
  }
};

class Match{
  constructor(playerA, playerB){
    this.winner = null;
    this.players = [new ScoreBoard(playerA), new ScoreBoard(playerB)];
  }
};

const recordPoint = (matches, array) => {
  let point = array[0];
  if(point !== '0' && point !== '1'){
    return;
  }

  if(matches[matches.current]['winner']){
    console.log("Current game is over!");
    return;
  }

  let indexOfPlayer = parseInt(point);
  matches[matches.current]['players'][indexOfPlayer]['points'] ++;
  updateMatchResult(matches[matches.current]);
} 

const recordMatchId = (matches, array) => {
  console.log("record match id: " + array[1]);
  matches.current = array[1];
  // matches[matches.current] = {};
} 

const recordPlayers = (matches, array) => {
  matches[matches.current] = new Match(array[1], array[4]);
  console.log("New Match start!");
} 

module.exports = {
  recordPoint,
  recordMatchId,
  recordPlayers
}
