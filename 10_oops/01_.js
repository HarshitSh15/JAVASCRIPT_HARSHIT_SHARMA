// basics of oops is the object literal in js 
/*
let obj={
    username:"har",
    hello:function (){
        console.log(`${this.username}`);
        console.log(this); // this is for the current text
        
    }
}

console.log(obj.hello());
console.log(this);
*/


function f1(name,place){
    this.name=name;
    this.place=place;
    this.f2=function (){
        console.log("hello");
        
    }
    return this;
}

const x = new f1("har","pal"); // this create a new instance and initialize a constructor
console.log(x.f2());
const y= new f1("vin","naj");
console.log(y);
