// var, let , const
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a);   // output => a is not defined, blocked scope  
//console.log(b);   // output => b is not defined, blocked scope  
//console.log(c);     // global scope

//scope in window & node ?
// both scopes are different
//  In browsers, the window object serves as the global context, while Node. js uses the global object

function one(){
    const kakaname = "puchi"

    function two(){
        const website = "Youtube"
        //console.log(kakaname);
    }
    //console.log(website);
    //two()
    
}
one()

// ===============Interesting=============

console.log(addone(5));


function addone(num){
    return num + 1
}
//  output => 6
// addone(5)

// In this case there won't be any error due to hoisting

//  console.log(addtwo(5));     // it will give error => cannot access before initialization
const addtwo = function(num){
    return num + 2
}
addtwo(5)
// In this case there won't be any error due to hoisting
