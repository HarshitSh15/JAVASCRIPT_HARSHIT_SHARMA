// this refer to the current context and it only used in objects not in fn 

let x ={
    name:"har",
    price:234,
    msg: function(){
        console.log(`${this.name}, hello`);
        console.log(this);
        
        
    }
}

x.msg();
/*
x.name="sh"; // this only possible with the help of the yhis keyword 

x.msg();
*/
console.log(this);


let addtwo=(num1,num2) =>{
    return num1+num2
}

console.log(addtwo(1,2));

/*
let addtwo=(num1,num2) =>(num1+num2)
     */
