const faris = {
    username: 'Trader fars',
    price: 50000,

    welcomemsg: function(){
        console.log(`${this.username} , welcome to website and journey of trader`);
        console.log(this);
        
    }
}
faris.welcomemsg()
faris.username = 'Raja G'
faris.welcomemsg()

// console.log(this);   output => {}

//  'Window' is a global object in browser
//  that is why 'this' val in browser is window and all its events

//  'Node' has empty global object 
//  that is why 'this' val in node is empty object

function chai(){
    let username = 'Kro access'
    // console.log(this.username);  // It's output => undefined
    console.log(this);
    // can't use this in function, we can use in objects
}

// chai()

// If you check 'this' in function it will give many diff values 
// And also we can't use 'this' like we use in objects

const chai1 = function(){
    let username = 'Kro access'
    // console.log(this.username);  // It's output => undefined
    console.log(this);
}

// chai1()

// arrow function 

const chai2 = () => {
    let username = 'Kro access'
    // console.log(this.username);  // It's output => undefined
    console.log(this);
}

// chai2()

// In arrow function 'this' will return empty object

// syntax of arrow funtion
// () => {}     basic syntax of arrow function
// we can hold arrow funciton in variable , let or const


// const addingTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addingTwo(3, 4));

// const addingTwo = (num1, num2) => num1 + num2
// console.log(addingTwo(3, 4));

// if you use curly braces you have to use 'return',
// if not don't necessarily need the return key word
// if you uses small brackets then also no need to use return

const addingTwo = (num1, num2) => (num1 + num2)
console.log(addingTwo(3, 4));
