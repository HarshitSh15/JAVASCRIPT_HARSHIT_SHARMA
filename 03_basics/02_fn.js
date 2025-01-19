// if we have multiple values tham we use spread methods 

function same(...num){
    return num;
}

console.log(same(200,300,300,300));


const user ={
    name: "har",
    age: 14
}

function fn1(obj){
    console.log(`name is ${obj.name} and age is ${obj.age}`);
    
}

fn1(user);