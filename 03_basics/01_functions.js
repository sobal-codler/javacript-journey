// function deefination

function sayName(){
    console.log('S');
    console.log('o');
    console.log('b');
    console.log('a');
    console.log('l');
}
//sayName()

function addNum(num1, num2){    // these two parameters
    console.log(num1 + num2);
}
//addNum()    // output NaN
//addNum(2, 5)    // aurguments

const result = addNum(3, 5)     // output => 8

console.log(`Result : ${result}`);  //  output => Result: undefined

function addNumber(num3, num4){    // these two parameters
    // let resultval = num3 + num4;
    // return resultval

    return num3 + num4;
}
console.log();
