// var c = 300
let a = 300

if (true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ",a);
    
}


console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const usename = "Ashu"

    function two(){
        const website = "youtube"
        console.log(usename);
        
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "Ashu"
    if (username === "Ashu"){
        const website = " Youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


//  ++++++++++++++++++++  intersting ++++++++++++++

function addOne(num){
    return num +1
}

addOne(5)

const addTwo = function(num){
   return num+2 
}

addTwo(5)