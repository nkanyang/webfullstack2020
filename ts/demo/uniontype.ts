//combine type
//literal type

type Combinable = number | string; 
type Conversion = "as-number" | "as-test"; //type alias

function combine(
  input1: Combinable, //type alias
  input2: number | string, 
  resultConversion: "as-number" | "as-text"){ 
  let result;
  if(typeof input1 === "number" && typeof input2 === "number" || resultConversion == "as-number"){
    result =  +input1 + +input2;
  }else{
    result =  input1.toString() + input2.toString();
  }
  return result;
}

const combineNumber = combine(30, 26,"as-number"); 
const combineString = combine("Max", "Anna", "as-text");

//