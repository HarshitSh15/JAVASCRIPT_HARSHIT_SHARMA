// IIFE- immideately invoked function expression 

(
    function h(num1){ // named iife where function iffe
        console.log('hello'+num1);
        
    }
)(3); // semilcolon imp

(
    (num1) =>{
        console.log(num1);
        
    }
)(5);
// we use iife because some functions are called immideately and to reduce pollution from the global scope which means that some variable are declared globally and they might pollute the functions's variables 