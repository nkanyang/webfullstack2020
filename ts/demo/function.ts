//return value: number
function add2(n1: number, n2: number){
  return n1 + n2;
}

//return viod (undefines is not legal for a return value)
function printMe(num: number){
  console.log("Result: " + num);
}

console.log(printMe(3)); //console log a viod function will print "undefined"

//type of function

let myfunction: (a:number) => void;
//myfunction = add2; type not match
myfunction = printMe;

//use function type in callback
function useCallback(n1: number, n2: number, cb: (res:number)=> void){
  cb(n1+n2);
}

useCallback(3, 5, printMe); //print 8 on the concole
useCallback(2, 5, (a)=>console.log(a));