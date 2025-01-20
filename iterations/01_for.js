/*
for(let i=1; i<=10; i++){
    console.log(i);
    
}

let arr=[1,2,3,4,5,6];

let idx=0;
console.log(" ");

while(idx<arr.length){
    console.log(arr[idx]);
    idx++;
    
}
    */
/*
let x =10;

do {
    console.log(x);
    x++;
    
} while (x<11);
*/
/*
let arr= [1,2,3,4,5];

for (const it of arr) {
    console.log(it);
    
}

let mpp= new Map()

mpp.set(1,2)
mpp.set(2,3)
mpp.set(4,5)
mpp.set(6,7)
console.log(" ");

for (const [key, value] of mpp) {
    console.log(key,value);
    
}

for (const key in arr) { // in loop pint the keys 
   console.log(arr[key]);
   
}
   */


let arr= [1,2,3,4,5];
/*
arr.forEach(function(item){
    console.log(item);
    
})

console.log(" ");

arr.forEach((item)=>{
    console.log(item);
    
})
*/

arr.forEach((item, arr, index)=>{
    console.log(item, arr, index);
    
})

let arr2=[
    {
        lang:'py'
    },
    {
        lang:'c++'
    }
];

for(let i=0; i<arr2.length; i++){
    console.log(arr2[i].lang);
    
}

arr2.forEach((item)=>{
    console.log(item.lang);
    
})