// singletons
// Object.create

//use symbols as keys in object
const mySym= Symbol("key1")

// object literals - key:value
const user={
    name:"SIm",
    [mySym]: "id",
    // with [] simple key becomes symbol key
    "full Name": "SIMARJEET",
    age:21,
    isLogin:false
}

console.log((user.age));
console.log(user["age"]);
//dont prefer user. instead user[""]
console.log(user["full Name"]);

// [key] is format to assign in user for object as data type
console.log(user[mySym]);
console.log(typeof mySym);

// edit obj entries
user.age= 22
console.log(user);

//freeze object for any edits
// Object.freeze(user)
// user.name= "SIMSIMSIM"
// console.log(user);

user.greetings = function(){
    console.log("happy coding");
}
console.log(user.greetings); //function just gets referenced
console.log(user.greetings()); //fucntion executes

user.greetings2 = function(){
    console.log(`happy coding, ${this.name}`); //string interpolation `` and ${var} for variable
}
console.log(user.greetings2());








