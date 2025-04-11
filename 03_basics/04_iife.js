// Immediately invocked function
// (IIFE)

(function chai(){
    console.log('DB CONNECTED');
})();
// (/*function*/)(/*execution*/)
// There is problem because of the 'pollution of global scope' to remove this pollution we use iife

( () => {
    console.log('check arrow iife');
    
} )()

// There is error when i execute the arrow function in node
// why
// it is because iife needs to know about where it is ending
// That is why before writing new we have to use semicolon (;) to avoid error
