// console.log("A");
// console.log("S");
// console.log("H");
// console.log("U");


function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("U");
}

// sayMyName()

// function addTwoNumbers(number1, number2){  //these values are parameters
//     console.log(number1+number2); 
    
// }
function addTwoNumbers(number1, number2){  //these values are parameters
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

const result = addTwoNumbers(3,4)  // these values arearguments

// console.log("Result: ", result);

function loginUserMessage(usename= "sam"){
    if(!usename){   // also can write in usename === undefined
        console.log("Please enter a usename");
        return 
    }
    return `${usename} just logged in`
}

// console.log(loginUserMessage("Ashu"));
// console.log(loginUserMessage("Veer"));

function calculateCartPrice(val1,val2,...num1){  // rest operator ...
    return num1
}

// console.log(calculateCartPrice(200,400,500,3000));

const user = {
    username: "Ashu",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`); 
}

// handleObject(user)
handleObject({
    username:"Sam",
    price: 599
})

myNewArrray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArrray));
console.log(returnSecondValue([200, 400, 500, 1000]));