const name = "Sobal";
const lastName = " Naseeb";

//      console.log(name + lastName); out put => Sobal Naseeb
//      this method is old now a days ==> outdated syntax

//      modern method is ===>  string interpolation
//      we use backticks ==> `` (easy and simple and more readable), we made placeholder

console.log(`My name is ${name} and my father name is${lastName}. So my full name is ${name}${lastName}`);

//      another syntax of declaring the string

let gameName = new String('Warzone'); 

//  it become string object and there are many methods we get in prototype (as we know every object have prototype)

//  access key value pairs

//  console.log(gameName[0]);  output will be ==> W
//  console.log(gameName.__proto__);    output ==> {}  you can see all methods in browser

//  some methods 
console.log(gameName.length);  // give length of string
console.log(gameName.toUpperCase());    // convert the copy to uppercase
console.log(gameName.charAt(3));    // we can check at what position which character is
console.log(gameName.indexOf('n')); // we check the position of any character

const newString = gameName.substring(0, 4)      // start from 0 index and end at 3, it doesn't give the  
//      0 indicate the starting position and other value which is written 4 indicate end value
console.log(newString);     

    // output => Warz  it retuning from 0 index to 3 index

const anotherSting = gameName.slice(-8, 3);     // it same like substring but it is also can pas -ive value
// which then act in reverse and return val from last 

console.log(anotherSting);

const newStringOne = "    sobal    ";       // extra space
console.log(newStringOne);
console.log(newStringOne.trim());       // remove extra space
// read mdn about trim

const url = "https:www.google%20idon'tknow"        // browser add  %20 to remove empty space

console.log(url.replace('%20', '-'));

console.log(url.includes("war"));


