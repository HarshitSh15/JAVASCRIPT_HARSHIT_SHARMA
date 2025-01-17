
let sym= Symbol("hhh");

const obj ={
    name :"har",
    age :99,
    "full name": "harshit sharma",
    [sym]:"jjjj"// symbol in object is declared as by the help of the sqare bracket 
}
/*
console.log(obj.name);
console.log(obj["full name"]); // this cant be accessed by the .method
console.log(obj["name"]);
console.log(obj[sym]);

*/
// Object.freeze(obj); // this means that our object will be freezed so no changes 

// adding fn in object 

obj.greeting = function(){
    console.log(`hello ${this["name"]}`); // this refferred means that this object if we are working in the obj
    
}
console.log(obj.greeting());

console.log(" ");

obj.greeting2 = function(){
    console.log(`hello ${this.name}`);
    
}


console.log(obj.greeting2()); // here () are necessary after the key 

//console.log(obj);
console.log(" ");

obj.greeting3 = function(){
    console.log(`hello ${obj.age}`);
    
}
console.log(obj.greeting3());

