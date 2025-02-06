// array , string , fn are objet


let x =[2,3,4];

let y ={
    name:"har",
    z:function(){
        console.log(this.name);
        
    }
}

Object.prototype.hello= function(){ // in this whole object is given a fn so every object can acces it 
    console.log('hello');
    
}

y.z();

y.hello();
x.hello();

Array.prototype.m=function(){ // in  this fn is provided to the only array 
    console.log('m');
}
x.m();

let str='helloo           ';

String.prototype.truelength=function(){ // this prototype fn will only be accesssed by thr string object 
    console.log(this);
    console.log(this.trim().length);
    
    
}
str.truelength();