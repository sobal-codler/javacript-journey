// function deefination

// function sayName(){
//     console.log('S');
//     console.log('o');
//     console.log('b');
//     console.log('a');
//     console.log('l');
// }
//sayName()

function addNum(num1, num2){    // these two parameters
    console.log(num1 + num2);
}
//addNum()    // output NaN
//addNum(2, 5)    // aurguments

const result = addNum(3, 5)     // output => 8

//console.log(`Result : ${result}`);  //  output => Result: undefined

function addNumber(num3, num4){    // these two parameters
    // let resultval = num3 + num4;
    // return resultval

    return num3 + num4;
}

function calCartPrice(...number1){  // (... => rest operator)
    return number1
}
//console.log(calCartPrice(200, 400, 500, 600));  // output => 200 without rest operator
//console.log(calCartPrice(200, 400, 500, 600));  // output => array containing all values with rest operator

const user = {
    username: 'hitesh',
    price: 199
}

function handleObj(anyObjt){
    console.log(`Username is ${anyObjt.username} and price is ${anyObjt.price}`);
}
handleObj(user)
// if above val is changed by any chance the it will give undefined

// we directly pass the object

handleObj({
    username: 'Kaka',
    price: 399
})

