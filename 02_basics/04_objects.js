// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname:{
            firstname:"den",
            lastname: "kay"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2) //{} - optional parameter and it seems as target as (target,source)

// const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email: "a@gmail.com"
    },
    {
        id:1,
        email:" a@gmail.com"
    },
    {
        id:1,
        email: "a@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('LoggedIn'));

const course = {
    coursename: "Js",
    price: "999",
    courseIntrustor: "Ashu"
}

// course.courseIntrustor

const {courseIntrustor:Instructor} = course

console.log(Instructor);


// {
//     "name" : "Ashu",
//     "coursename" : "Js",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]

