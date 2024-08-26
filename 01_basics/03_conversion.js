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
 