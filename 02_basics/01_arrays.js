//array
const arr = [1,4,2,3,69]
console.log(arr[4]);

arr.push("33 helllo")
arr.push(123)
arr.push(0.2)
console.log(arr);

arr.pop()
arr.pop()
console.log(arr);

//unshift adds in the start of arr
arr.unshift(888)
console.log(arr);
//shift removes that initial
arr.shift()
console.log(arr);

// join adds all elements into a string
const newArr= arr.join()
console.log(newArr);

//SLICE -> extracts the required and SPLICE -> removes the required from original arr
const aaa=[2,3,4,5,6]

const bbb= aaa.slice(1,3) //3 excluded and orig arr asitis
console.log(bbb);
console.log(aaa);

const ccc= aaa.splice(1,3) //3 included and removes from orig arr
console.log(ccc);
console.log(aaa);








