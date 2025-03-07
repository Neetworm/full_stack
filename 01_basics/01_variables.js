const accountId= 144553;
let accountEmail= "garvit@google.com";
var accountPassword= "12345";
accountCity= "Jaipur";

//accountId= 2   -> not allowed.

accountEmail= "g@gm.com";
accountPassword= "4567";
accountCity= "Bengluru";

/*
Prefer not to use var 
because of the isssue in the block scope and functional scope.

*/
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);