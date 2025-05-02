// Basic syntax of a switch statement
// switch (expression) {
//     case value1:
//         // Code to execute if expression === value1
//         break;
//     case value2:
//         // Code to execute if expression === value2
//         break;
//     // Add more cases as needed
//     default:
//         // Code to execute if no case matches
//         break;
// }

const foo = 1;
switch (foo) {
    case 1:
        console.log("foo is 1");
        break;
    case 2:
        console.log("foo is 2");
        break;
    default:
        console.log("foo is neither 1 nor 2");
        break;
            
}