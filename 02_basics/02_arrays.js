const marvel=["thor", "ironman","spiderman"]
const cartoon=["chota bheem", "ninja"]

marvel.push(cartoon) //pushed arr simply gets attached
console.log(marvel);
//very untidy join of array

const marvel2=["thor", "ironman","spiderman"]
const cartoon2=["chota bheem", "ninja"]

const newA= marvel2.concat(cartoon2) //concat doesnt edits the arr so needs to be stored
console.log(newA);

// use spread by 3 dots ...arr and use elements individually
const names=[...cartoon2,...marvel2] 
console.log(names);

// arr inside arr can be opened using flat(depth)
const arrr= [3,[4,5,6],[1,0],[2,[0,[0]]]]
const flattt= arrr.flat(Infinity)
console.log(flattt);

//check isArray 
console.log(Array.isArray("SIMAR-JEET"))
//convert to array
console.log(Array.from("SIMAR-JEET"));
console.log(Array.from({name:"SIM"})); //interesting -> empty set coz not specified key or value 

//const var to array
let one=34
let two= 89
console.log(Array.of(one, two))





