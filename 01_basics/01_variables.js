const accountId = 144553;
let accountEmail = "kundu.rima64@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; // not allowed
accountEmail = "puma@gmail.com";
accountPassword = "Rp524";
accountCity = "Bangaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
