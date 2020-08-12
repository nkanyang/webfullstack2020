var readline = require("readline");
var fs = require("fs");

// var writeStream = fs.createWriteStream('./output');
// var outpuf = fs.writeFile('./output')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  fs.writeFile('./output', answer,(err) => {
    if(err){
      console.log("Write file error:" + err);
    }
    console.log("Write file done!")});
  rl.close();
});