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