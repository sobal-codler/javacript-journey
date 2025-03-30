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

