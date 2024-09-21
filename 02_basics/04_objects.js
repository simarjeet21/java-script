// const tinderUser= new Object() -> Singlrton object
// const tinderUser= {} -> non singleton object

const tinderUser = {}
tinderUser.id="311"
tinderUser.name="ram"
tinderUser.isLoggedIn= false
console.log(tinderUser);

const regularUser = {
    email: "simar@google.com",
    fullName: {
        userFullName:{
            firstName: "SIMAR",
            lastName: "JEET"
        }
    }
}

console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {1:"c", 2:"d",3:"bc"}
const obj2 = {4:"s",7:"ds",9:"ass"}

// const obj3= {obj1,obj2}
const obj3= Object.assign({},obj1, obj2) //first braket is target and next are source
console.log(obj3);
const obj4 = {...obj1,...obj2} //spread ...object 
console.log(obj4);

const users = [
    {
        id:1,
        name:"ss"
    },
    {
        id:2,
        name:"ww"
    }
]

console.log(users[1].name)

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

//Object deconstruct

const course = {
    courseName:"copywriting",
    brand: "Danlok",
    instructor: "Adam",
    price: "20,000"
}

// course.instructor is a long way to use repeatedly -> deconstruct
const {instructor} = course
console.log(instructor);

const {price: rate} = course
console.log(rate);

//API's -> apna kaam kisi aur se karvana
//json -> java script object notation
[
    {},
    {},
    {}
]

