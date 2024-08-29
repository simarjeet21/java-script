const income = 400 
console.log(income);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 2 precision values

const round= 23.8903
console.log(round.toPrecision(3));
const round2= 123.8903
console.log(round2.toPrecision(3));

/////////// MATHS///////////

console.log(Math);
console.log(Math.abs(-4.6));
console.log(Math.round(4.5699)); //normal round off
console.log(Math.ceil(4.2)); //upper number
console.log(Math.floor(4.999)); //lower number
console.log(Math.max(6,3,87)); //max and min

//Random value greater than 1
console.log(Math.random()*10 +1);

//random integer between min, max
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)) + min);











