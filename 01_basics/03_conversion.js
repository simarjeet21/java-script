let score ="33abc"
let valueNum = Number(score)

console.log(typeof score)
console.log(typeof valueNum)
console.log(valueNum) // NaN not a number

let test = null
let num= Number(test)
console.log(num) // null might create problem as it returns 0

let test2 = undefined
let num2= Number(test2)
console.log(num2) //undefined is better, results NaN
 
//OPERATIONS
let st1 = "hello"
let st2 = " simar"
console.log(st1+st2)

console.log(1+"2");
console.log(1+1+"2"); //first datatype is prefered
console.log("1"+1+2);
console.log("1"+1+"2");
console.log(1+2);

//COMPARISON
console.log(1>2);
console.log(1>=2);

console.log(null>0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
// for undefined all false

console.log(2=='2'); //data type conversion then compare -> true
console.log(9==='9'); //strict check -> false



