class user{
    constructor(name,pass){
        this.name= name;
        this.pass= pass;
    }

    print(){
        return this.name;
    }
}

let x = new user('har',123);

console.log(x.print());


function user1(name, pass){ // this is behind working of the class
    this.name=name;
    this.pass=pass;
}
const y = new user1('har',123)
user1.prototype.print=function(){
    return this.name;
}
console.log(y.print());
