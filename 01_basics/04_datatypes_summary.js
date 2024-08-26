//Primitive
//String, Number, Boolean, null, undefined, symbol, BinInt

const id= Symbol('123')
const refid= Symbol('123')
console.log(id==refid); // false


//JS is a dynamically typed lang. means variables are automatically defined at runtype. eg: x=3.3 -> x is Number

//Non- Primitive or Reference type
//Array, Object, Functions

//Array
const hero=["supman","spman"]
//Object
let myObj= {
    name:"simar",
    age:21
}
//Functions
const myFxn= function(){
    console.log("hello Simar");
}

console.log(typeof myFxn);
console.log(typeof myObj);
console.log(typeof hero);

//----------

//Stack memory (Primitive) 
//Heap memory (Non-Primitive) 

//Stack allocation -> makes a copy
let txt1= "hello"
let another = txt1
another = "edit"

console.log(txt1);
console.log(another);

//Heap allocation -> references the location
let user={
    email: "djfh@fj.com",
    upi: "ram@oksbi"
}

let user2= user // reference to same location

user2.email= "simar@gmail.com"

console.log(user.email);
console.log(user2.email);

