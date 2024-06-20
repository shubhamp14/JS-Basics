const accountId = 1114
let accountEmnail = "Bugbuster@spy.com"
var accountPassword = "1234"
accountCity = "Sangli"
let accountState;

//Perfer not use "Var" as the issue with var for the scope and functional scope
// If we decalre variable without adding value or initialization it will give "undefined" message


// acId= 2 // not allowed

accountEmnail = "Bugbuster@spy.in"
accountPassword = "12345"
accountCity = "Pune"

console.log(accountId);
console.table([accountId, accountEmnail, accountPassword, accountCity, accountState])

/*In summary:
    Use const by default for variables that shouldn't change their value.
    Use let when you need to reassign a variable within its block scope.
    Avoid using var in modern JavaScript due to its potential scoping issues. 
        It's generally recommended to use let or const for better code clarity and maintainability.
*/
 