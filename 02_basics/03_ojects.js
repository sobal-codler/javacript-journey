// Singleton
// if we make object by constructor it create singleton (unique 'i guess')
// Object literals => When we make other that cons the (its multiple instances created)

// Object literals:

const JsMaster = {
    name: 'Sobal',
    age: 16,
    location: 'Islamabad',
    email: 'sobalreeb@gmail.com',
    isLoggedIn: true,
    lastLoginDays: ['Monday', 'Saturday']
}

// access methods => 

console.log(JsMaster.email);
console.log(JsMaster['email']);
