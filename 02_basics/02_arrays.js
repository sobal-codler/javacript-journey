const myArr = ['kaka', 'Gud', 'Miro']
const otherArr = ['Beer', 'Ephi', 'Fat']

//myArr.push(otherArr)
//console.log(myArr);

// output -> ['kaka', 'Gud', 'Miro', ['Beer', 'Ephi', 'Fat']]
// push work on exsiting array
// 

const merging = myArr.concat(otherArr)
//console.log(merging);
// concat work on new array
// It only merge two array or element

// Spread operator ==> ...
// We can merge infinite element
const spreadmerging = [...myArr, ...otherArr]
//console.log(spreadmerging);

const interestingArr = [1, 2, 3, 4, [5, 6, 7, [8, 9, [10]]]]

const flatingArr = interestingArr.flat(Infinity)
// we have to give steps in number in the value also can use infinity

console.log(flatingArr);

console.log(Array.isArray('Hitesh'));
// can also ask if array or not
// output ==> false

console.log(Array.from('Hitesh'));
// can convert into array
// output ==> ['H', 'i', 't', 'e', 's', 'h']

console.log(Array.from({name: 'sobal'}));
// output => [] return empty arry, you have to tell what to return , value etc

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// output => [100, 200, 300]









