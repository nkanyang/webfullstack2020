const updateMatchResult = require("./get-winner");

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
  matches[matches.current] = {};
} 

const recordPlayers = (matches, array) => {
  let players = [];
  let player1 = {'name' : array[1], 'sets' : 0, 'games' : 0, 'points' : 0 ,'gamesWon': 0};
  players.push(player1);
  let player2 = {'name' : array[4], 'sets' : 0, 'games' : 0, 'points' : 0 ,'gamesWon': 0};
  players.push(player2);
  matches[matches.current]['players'] = players;
} 

module.exports = {
  recordPoint,
  recordMatchId,
  recordPlayers
}