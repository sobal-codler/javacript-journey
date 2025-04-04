// singleton & object literals

// singleton > constructor 

const tinderUser = new Object()     // singleton object
const tinderUser1 = {}              // Non singleton object

tinderUser.id = "1234as"
tinderUser.name = "Tech Savy"
tinderUser.isLogedIn = false

//  console.log(tinderUser);

const regularObj = {
    email: "someone@gmail.com",
    fullname: {
        username: {
            firstname: "some",
            lastname: "one"
        }
    }
}

//  console.log(regularObj.fullname.username.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//     how to combine objects 
const combine = {obj1, obj2}
//  console.log(combine);
//  output  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const combining = Object.assign({}, obj1, obj2)
console.log(combining);
//  output  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// first val is target(save all sources), second val is sources

// How to access the keys of object => method

console.log(Object.keys(tinderUser));

// also can access values   => method
console.log(Object.values(tinderUser));

// interesting method to convert object into arrays
console.log(Object.entries(tinderUser));

//  check if the object has specific values or not ?
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: 'Js in hinidi',
    price: '999',
    courseInstructor: 'Hitesh'
}

const {courseInstructor} = course