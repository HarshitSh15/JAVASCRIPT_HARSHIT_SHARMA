/*
const num =100;
console.log(num);


const x= new Number(10000.099999999);

console.log(x);

console.log(x.toFixed(1)); // this will rou nd off the after decimal digits 

const another= 44.98756;

console.log(another.toPrecision(2)); //this will focus on the before decimal digits is we are using this we should know how many digits will be coming 

const onemore=1000000000000000000000;

console.log(onemore.toLocaleString('en-IN')); // this introduces comma so that redability also increses

*/

// *********************************************************************************************
console.log(Math.PI);
console.log(Math.floor(4.9));
console.log(Math.ceil(44.9));
console.log(Math.abs(-7));


console.log(Math.random()); //this gives value which ranges beetween 0to 1 

console.log(Math.random()*10);

console.log(Math.floor(Math.random()*10) +1);  // if after multiplying with 10 the number may be 0.1 tha the flooral value will be 0 so the we added 1 here

const min= 10;
const max =20;

// wants to generate random no. that ranges beetween min and max

  console.log( (Math.random()*(max-min) )+min );
 