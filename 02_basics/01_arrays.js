// arrays

// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
/*
Core Characteristics
-> resizeable & can contain mix of diff data types
-> JS arrays are not associative arrays, so can't be accessed arbitrary (only non negative indexes)
-> Are zero indexed & length pro mused be minus 1.
-> JS copy operations create shallow Shallow copies (same reference) rather than deep deep copies ()
*/

const myArr = [0,1]
//console.log(myArr);

const myArr1 = new Array(2,3)
//console.log(myArr1);

// Array methods

// .push (value)  it adds the value at end
// .pop() it only remove last value of array
// .unshift(value) => it add new value at 0 index in array
// .shift() => it remove first value of array


//console.log(myArr.includes(4)); // return boolean value check in array contain that value

const newArr = myArr.join(myArr1)
console.log(newArr);

