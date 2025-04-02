// Singleton
// if we make object by constructor it create singleton (unique 'i guess')
// Object literals => When we make other that cons the (its multiple instances created)

const mySym1 = Symbol('Key1');
const mySym2 = Symbol('Key2');
const mySym3 = Symbol('Key3');
const mySym4 = Symbol('Key4');

// Object literals:

const JsMaster = {
    name: 'Sobal',
    'Ful name': 'Naseeb Masih',
    age: 16,
    mySym1: ('myKey1'),
    mySym2: 'myKey2',
    [mySym3]: 'myKey3',
    mySym4: 'myKey4',
    location: 'Islamabad',
    email: 'sobalreeb@gmail.com',
    isLoggedIn: true,
    lastLoginDays: ['Monday', 'Saturday']
}

// access methods => 

//console.log(JsMaster.email);
//console.log(JsMaster['email']);

// we can't access fulname with dot (.) method becase there is space between words ful and name
// console.log(JsMaster.Ful name);
//console.log(JsMaster['Ful name']);

// if you use symbols then what happens
//console.log(JsMaster.mySym1);
//console.log(typeof JsMaster.mySym1);    // type is string not a symbol
//console.log(JsMaster.mySym2);
//console.log(typeof JsMaster.mySym2);    // type is string not a symbol

// for symbol 
console.log(JsMaster[mySym3]);
console.log(typeof (JsMaster[mySym3]));
console.log(JsMaster['mySym4']);
console.log(typeof (JsMaster['mySym4']));







