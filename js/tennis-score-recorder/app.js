const fs = require('fs');
const FILE_NAME = "./full_tournament.txt";
const { recordPoint, recordMatchId, recordPlayers} = require("./line-operations");

const matches = {};

const lineOperations = {
  '1': recordPoint(matches),
  '2': recordMatchId(matches),
  '5': recordPlayers(matches)
};

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(FILE_NAME)
});

lineReader.on('line', (line) => {
  let array = line.toString().split(" ");
  lineOperations[array.length](array);
})
  .on('close', () => {
    // console.log(JSON.stringify(matches));
    console.log("Recording done!")
    printMatchById(matches, '01');
    printWonRecordByPalyerName(matches, 'A')
  });


var printMatchById = (matches, matchId) => {
  let match = matches[matchId];
  let winner = match.players[match.winner];
  let theOtherPlayer = match.players[1 - match.winner];
  console.log(`in match ${matchId} :`);
  console.log(`Person ${winner.name} defeated Person ${theOtherPlayer.name} `);
  console.log(`${winner.sets} sets to ${theOtherPlayer.sets}`);
}

var printWonRecordByPalyerName = (matches, playerName) => {
  let won = 0;
  let lost = 0;
  Object.keys(matches).forEach( (matchId) => {
    if(matchId === 'current'){
      return;
    }
    let players = matches[matchId]['players'];
    for( let i = 0; i < 2; i++){
      if(players[i].name === playerName){
        won += players[i].gamesWon;
        lost += players[1 - i].gamesWon;
      }
    }
  });
  console.log(`The record of ${playerName} :  won: ${won}, lost ${lost}`);
}