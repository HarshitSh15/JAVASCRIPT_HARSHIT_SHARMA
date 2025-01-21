let arr=[1,2,3,4,5,6,7,8,9]

let x = arr.reduce((acc,curr)=>(acc+curr),0); // intial value of acc(accumulator is 0)
console.log(x);

let arr2=[
    {
        price:200
    },
    {
        price:200
    },
    {
        price:200
    }
]

let y = arr2.reduce((acc, curr)=>(acc+ curr.price),0);
console.log(y);
