const faris = {
    username: 'Trader fars',
    price: 50000,

    welcomemsg: function(){
        console.log(`${this.username} , welcome to website and journey of trader`);
        console.log(this);
        
    }
}
faris.welcomemsg()
faris.username = 'Raja G'
faris.welcomemsg()

// console.log(this);   output => {}

//  'Window' is a global object in browser
//  that is why 'this' val in browser is window and all its events

//  'Node' has empty global object 
//  that is why 'this' val in node is empty object
