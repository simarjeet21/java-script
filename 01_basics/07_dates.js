let myDate = new Date()
//Date is a object type
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myNowDate = new Date(2024,0,29)
let myNowDate2 = new Date(2024,0,29,5,3)
console.log(myNowDate.toDateString());
console.log(myNowDate2.toLocaleString());

let myDate3 = new Date("2024-01-23")
console.log(myDate3.toDateString());

//millisecond from the start 1st jan 0:0
let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myDate3.getTime());

console.log(myDate.getDate());
console.log(myDate.getDay());






