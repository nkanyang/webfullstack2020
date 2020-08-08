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
    console.log(JSON.stringify(matches));
  });


