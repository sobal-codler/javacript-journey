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
console.log(typeof newArr);

// myArr = [0, 1], myArr1 = [2, 3]
// output => 02,31   => type is string not array
// it join the items according to indexing

// diff between slice and splice

const Arrs = [1, 2, 3, 4, 5, 6]
console.log('A', Arrs);

const sli = Arrs.slice(1, 3);
console.log(sli);   // output => [2, 3]

console.log('B', Arrs);
const spi = Arrs.splice(1, 3);
console.log(spi);  // output => [2, 3, 4]

console.log('C', Arrs); // output => [1, 5, 6]

/*
-> slice gives the in between the range it didn't include end index
-> it also make shallow copies 
-> didn't change the original array
-> it can use -ive val, it return from last by -ive val


    //slice
-> it replace or add the values in array
-> Negative back or end of the array
-> It changes the original array (does not make shallow or deep copies)

Return value
An array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.

*/

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

