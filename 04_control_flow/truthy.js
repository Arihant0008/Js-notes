const userEmail =  []  //"a@ashu.ai"

if (userEmail) {
    console.log("Got user Email");
    
} else {
    console.log("Don't have user email");
    
}

// falsy values

// false , 0 , -0, BigInt 0n, "", null, undefined , NaN

// truthy values

// true,"0", 'false'," ",[],{}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}
/* O/P -> true
false == 0

false == ''

0 == ''
*/

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20
console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice<=80 ? console.log("Less than 80") : console.log("More than 80");





