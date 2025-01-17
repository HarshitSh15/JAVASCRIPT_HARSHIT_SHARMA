// object with the help of the constructor 
/*
let myobj = new Object();// object defined by the help of the constructor in sigleton object and object defined by the help of the literal is non-singleton object

myobj.id="123";
myobj.name="harshit";
myobj["location"]="palwal"

console.log(myobj);
*/
/*
let myobj= {
    id:123,
    name:{
        fullname:{
            firstname: "harshit",
            lastname:"sharma"
        }
    }
}

console.log(myobj.name.fullname.firstname);
console.log(" ");

// console.log(myobj[name[fullname["lastname"]]]); this will not be executed 

*/

let o1={1:"a", 2:"b"}
let o2={3:"a", 4:"b"}

// joining 
let o3 = Object.assign({}, o1,o2)// joining

console.log(o3);

let o4 = {...o1,...o2}
console.log(o4);

let arr=[{1:"a", 2:"b"},{3:"c", 4:"d"}]
console.log(arr[1]["3"]);


let myobj = new Object();// object defined by the help of the constructor in sigleton object and object defined by the help of the literal is non-singleton object

myobj.id="123";
myobj.name="harshit";
myobj["location"]="palwal"

console.log(Object.keys(myobj));// this take all the keys of the object and make a rray 
console.log(Object.values(myobj))

console.log(Object.entries(myobj)) //make an array of key and val 

console.log(myobj.hasOwnProperty("name"));// tell that wheather name exist or not only work on keys 
