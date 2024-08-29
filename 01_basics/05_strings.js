const name="SIMAR"
const caste="GABA"
console.log(name+caste);

console.log(`My name is ${name} and my caste is ${caste}`);

const fullName = new String("Simarjeet Singh Gaba")

console.log(name.length);
console.log(fullName.toUpperCase());
console.log(caste.charAt(2));
console.log(caste.indexOf("A"));

const substr= fullName.substring(5,10) //1st inclusive and 2nd excluded
console.log(substr);

const substr2= "   wow    "
console.log(substr2.trim());

const url= "https://google.com/hello%20world"
console.log(url.replace('%20','-'));

console.log(fullName.split(' '));





