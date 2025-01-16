/*
const myDate= new Date();

console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
*/
/*
let date = new Date(2023,0,14,8,30)// here the monthsstart with indexing 0
console.log(date.toString());

let newdate= new Date("1-8-2025") // montf-date-year here the month start with 1
console.log(newdate.toString());
*/
/*
let x = new Date.now()

console.log(x);
*/

let x = Date.now(); // this id from the date 1 jan 1970 in milli sec
console.log(x); // This will print the current timestamp in milliseconds

let newdate= new Date(); // indexing if the month will start from the 0 
console.log(newdate.getMonth());
