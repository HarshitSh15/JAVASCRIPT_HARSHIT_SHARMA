let  x=[1,2,3,4];
let y=[5,6,7,8];
/*
let z = x.concat(y)
console.log(z);
*/
// another way to concat 
/*
 let a = [...x,...y]; // this is the spread method we have draw back of concat that it can join only 2 nut in this we can join many arays

console.log(a);

*/


let arr= [1,2, [2,2], 3,5, [10,77,[3,4,5,]] ] // this can be solved by thhe help of the flat method 
let arr1= arr.flat(Infinity) // here we have to define depth so we assign infinity
console.log(arr1);

console.log(" ");

let s1=1;
let s2=2;
let s3=3;
 
console.log(Array.of(s1,s2,s3)); // all elements in one array 
console.log(Array.from("jjjjjjjjjj"));// convert string"s charachters in array 

// ************************************************************

