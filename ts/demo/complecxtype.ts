// object, array, tuple, enum, any
// tuple:fixed length and type array

const person: {
  name: string;
  age: number;
  hobbies: string[];  //string array
  role:[number, string, string] //tuple
} = {
  name: "Jon Doe",
  age: 20,
  hobbies: ["football", "drawing"],
  role:[2, "author", "This a the author"]  //
}

//array
let favourateActivities: string[];
favourateActivities = ["Sports"];

//any
let anyArray: any[]; //can have any type as its member
anyArray = ["hello", 24, true];

//tuple
//person.role[1] = 10; can not change to another type
person.role.push("comment"); //actually this can be done in typescript ,but not recommanded
//person.role = [0, "user", "this is user", "comment"]; this is not allowed in typescript

console.log(person);

enum Roles { ADMIN, USER=5, GUEST ,READ_ONLY=100 };
console.log(Roles);
console.log(Roles.READ_ONLY);

