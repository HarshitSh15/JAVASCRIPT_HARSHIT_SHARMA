function hello(username="har"){
    if(username === undefined){
        console.log("enter value");
        return
    }

    return `${username} is my name `
}
console.log(hello("harshit"));
console.log(" ");
console.log(hello());


