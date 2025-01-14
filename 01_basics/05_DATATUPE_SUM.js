/*
let id1= Symbol(123);
let id2= Symbol(123);

console.log(id1 === id2); // they both have same value but they are diff due to symbol symbol is used when there are same variable many times

const arr =["har", "shar", "pal"]

console.log(typeof arr);

let obj = { // this for the object 
    name: "har", 
    roll: "22"
}
    */
   //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack memory (primitive) - this gives the copy of the valye all values which are changed are done on the copy 

// head(non primirive )- give orignal refrence of the orignal values all changes will be done on the orignal value

let a = 123;
let b= a;

b= 456;
console.log(a); // here copy id is provided so the we changed in b nothing happened in a
console.log(b);


let user1={
    name: "hars",
    age: "22"
}

let user2= user1; // here direct refrence is provided every changes will be done on the orignal vaue
user2.name="sharma"; // we are doing changes in user2 name and it is refrence so the chang will be done on the whole object so user1 nme will also be changed 

console.log(user1.name);
console.log(user2.name);

