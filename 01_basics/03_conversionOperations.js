let scoreA = 33
let scoreB = "12"
let scoreC = "58ab"
let scoreD = null
let scoreE = undefined
let scoreF = "hello"
let scoreG = true
let scoreH = false

console.log(scoreA);            // 33
console.log(typeof scoreA);     // number
console.log(scoreB);            // 12
console.log(typeof scoreB);     // string
console.log(scoreC);            // 58ab
console.log(typeof scoreC);     // string
console.log(scoreD);            // null
console.log(typeof scoreD);     // object
console.log(scoreE);            // undefined
console.log(typeof scoreE);     // undefined
console.log(scoreF);            // string of alphabets
console.log(typeof scoreF);     // undefined
console.log(scoreG);            // boolean => true
console.log(typeof scoreG);     // boolean
console.log(scoreH);            // boolean => false
console.log(typeof scoreH);     // boolean


console.log("1____________________"); 


// string (num + alphabet) conversion ==> it gives NaN and type show number
let valInNum = Number(scoreC)   // conversion
console.log(valInNum);          // NaN
console.log(typeof valInNum);   // number


console.log("2____________________"); 


// null conversion ==> it gives 0 and type show number
let nullInNum = Number(scoreD)   // conversion
console.log(nullInNum);          // 0
console.log(typeof nullInNum);   // number

console.log("3____________________"); 


// undefined conversion ==> it gives NaN and type show number
let undefinedInNum = Number(scoreE)   // conversion
console.log(undefinedInNum);          // NaN
console.log(typeof undefinedInNum);   // number

console.log("4____________________"); 

// alphabet string conversion ==> it gives NaN and type show number
let alphanetInNum = Number(scoreF)   // conversion
console.log(alphanetInNum);          // NaN
console.log(typeof alphanetInNum);   // number

console.log("5____________________"); 

// true bool conversion ==> it gives NaN and type show number
let trueInNum = Number(scoreG)   // conversion
console.log(trueInNum);          // 1
console.log(typeof trueInNum);   // number

console.log("6____________________"); 

// false bool conversion ==> it gives NaN and type show number
let falseInNum = Number(scoreH)   // conversion
console.log(falseInNum);          // 0
console.log(typeof falseInNum);   // number

/*  33  => hai e number
    "53ab" => hai to string lakin convert krty hain to ==> NaN return krta hai lakin type number e show krata hai
    true => 1 ==> number
    false => 0 ==> number
*/

console.log("Boolean____________________Conversions"); 

let isLoggIn = 1

let checkBool = Boolean(isLoggIn)
console.log(checkBool);                 // true
console.log(typeof checkBool);          // boolean

/*  "" empty string return false
    "sobal" normal string return true
*/

console.log("String____________________Conversions"); 

let strNum = "1234"
let StringNum = String(strNum)

console.log(StringNum);                 // 1234
console.log(typeof StringNum);          // string


