console.log("This is an typesript test");
//learn about: number, string, boolean

function add(num1: number, num2: number, showResult:boolean, phrase: string){
  const result = num1 + num2;
  if(showResult){
    console.log(phrase + result);
  } else{
    return result;
  }
}

let n1:number;
n1 = 23;

const n2 = 1.23;
//n2 = "13"; not working in typescript -- can not change type

let isTrue:boolean;
//isTrue = 1; 0/1 can't used ad flase/ture

const printResult = true;
const resultPhrase = "Result is :";
add(n1, 4, printResult, resultPhrase);
