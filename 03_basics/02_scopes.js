// var, let , const
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a);   // output => a is not defined, blocked scope  
//console.log(b);   // output => b is not defined, blocked scope  
console.log(c);     // global scope

//scope in window & node ?
// both scopes are different
//  In browsers, the window object serves as the global context, while Node. js uses the global object
