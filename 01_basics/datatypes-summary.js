// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //automatically set as undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 321456697n


// Refreanced (Non primitive)

//Array, Objects, Functions

const heros = ["shatiman", "naagraj"];

let myobj = {
    name:"Ashu",
    age:"21",
}

const myfun = function(){
    console.log("Hello");
}

// myfun()

// console.log(typeof bigNumber);

// console.log(typeof heros);

// console.log(typeof myobj);



// console.log(typeof myfun);


// -------------------------

//Stack (Premitive), Heap(Non-Primitive)

let myName = "Arihant"

let anotherNmae = myName
anotherNmae = "Ashu"

console.log(myName);
console.log(anotherNmae);

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Ashu@google.com"

console.log(userOne.email);
console.log(userTwo.email);

