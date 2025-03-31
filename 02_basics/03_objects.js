// singleton 
// Object.create // singleton method

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name:"Ashu",
    "full Name": "Ashu Jain",
    age: 18,
    [mySym]: "mykey1",
    location: "Nagpur",
    email: "Ashu@google.com",
    isLoggedIn: true,
    LastLoginDays: ["Monday", "Wednesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "ASHU@chatgpt.in"
// Object.freeze(JsUser)
JsUser.email = "ASHU@chatgptashu.in"

//  console.log(JsUser);

 JsUser.greeting = function(){
    console.log("Hello Js user");
    
 }
 JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    
 }
 
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
 