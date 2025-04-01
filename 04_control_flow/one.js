// if
const isUserLoggedIn = true
const temperature = 41


// if (temperature== 40) {
//     console.log("Temp is less than 50");
    
// } else{
//     console.log("Greater than 50");
    
// }

// // <, > , <=,>=, ==, !=, ===, !==,

// const score = 200

// if (score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);


const balance  = 1000
// if (balance > 500) console.log("test"),console.log("test2");  -> es tarah nahi karna hai

// if (balance < 500) {
//     console.log("less than 500");
      
// }else if(balance < 750){
//     console.log("less than 750");

// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitcard = true
const LoggedInfromEmail = true
const LoggedInfromGoogle = false

if (userLoggedIn && debitcard) {
    console.log("Allow to buy course");   
}

if (LoggedInfromGoogle || LoggedInfromEmail){
    console.log("User logged in"); 
}

