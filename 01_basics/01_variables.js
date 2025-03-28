const accountId = 144553
let accountEmail = "asgu12@facebook.com"
var accountPassward = "123456"
accountCity = "Taipur" // ye accha nahi hai
let accountState;

// accountId =2  // not allowed


accountEmail = "hdhd@hd.co"
accountPassward = "212121"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassward, accountCity, accountState])
