const accountId = 144394;
let accountEmail = "sobal@google.com";
var accountPass = "12345";
accountCity = "Islamabad";

// accountId = 2; const not allowed to reassign values.
accountEmail = "faris@google.com"
accountPass = "098765"
accountCity = "Taxila"

console.table([accountEmail, accountPass, accountCity]);

/* Prefer not to use var
because of the it's issue in block scope and functional scope
*/