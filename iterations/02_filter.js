//let arr=[1,2,3,4,5,6,7,8,9]
/*
let x= arr.filter((item)=>{
    return item<6
})
console.log(x);
*/
/*
let arr2=[];

arr.forEach((num)=>{
    if(num<4){
        arr2.push(num)
    }
})

console.log(arr2);
*/
/*
let arr=[
    {
        name:'book1',
        type:"his",
        publish:2010
    },
    {
        name:'book2',
        type:"fic",
        publish:2016
    },
    {
        name:'book3',
        type:"his",
        publish:2020
    }
]

let x = arr.filter((num)=> (num.name === "book3" && num.publish == 2020) )
console.log(x);
*/
let arr=[1,2,3,4,5,6,7,8,9]

let x = arr.map((num)=>num*10).map((num)=> num+1).filter((num)=> num>50)
console.log(x);
