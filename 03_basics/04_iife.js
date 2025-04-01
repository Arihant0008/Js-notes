// Immediately Invoked function Expressions (IIFE)
//  FATAFAT EXECUTE

(function chai(){
    //  named IIFE
    console.log(`DB CONNECTED`);
    
})();

// ()()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Ashu");

