function getArrayOfKeysAndValues(obj){
   let arrayOfValues = [];
  let arrayOfKeys = Object.keys(obj).sort();
  arrayOfKeys.forEach(element => {
    arrayOfValues.push(obj[element])
  });
  return [arrayOfKeys,arrayOfValues];
}

let myObj = { a: "Apple", b: "Microsoft", c: "Google" };
console.log(getArrayOfKeysAndValues(myObj));