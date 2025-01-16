// array is a object 

let arr = [1,2,3,4,5];
 //let arr = new Array(1,2,3,4) another way 
/*
 arr.push(10);
 console.log(arr);
 arr.unshift(88);
 console.log(arr); // this will add 88 at the begning 

 arr.shift(); //  this will remove the 1st value 
 console.log(arr);

 let newarr= arr.join(); // this will copy arr into neww arr and convert it also in the string 
 
 */

 let a = arr.slice(1,3); // strt index included but not end indx
 console.log(a);
 console.log(arr);

 console.log("  ");

 let b = arr.splice(1,3);// start and end both idx are inclided and it romove element which are in idx range 
 // for eg- indexs -1,2,3 will be removed 
 console.log(b);
 console.log(arr); 




 