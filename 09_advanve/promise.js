/*
const prom1 = new Promise(function(resolve,reject){ // this is creation of the promise ist have fn which have 2 parametre resolve and reject 
    // doing any async task 
    // db calls , network calls

    setTimeout(function(){
        console.log("task completed");
        resolve(); // this keyword connect the reslve with this
    },1000)
})// first task in completed than promise is consumed  

prom1.then(function(){
    console.log("consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("task 2");
        resolve();
    },2000)
}).then(function(){
    console.log("consumed 2 ");
    
})


const prom3= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"har", place:"palwal"})
    },1000)
})

prom3.then(function(user){
    console.log(user);
    
})
    */

/*
const prom1= new Promise(function(resolve,reject){
    setTimeout(function(){
        const error= false;
        if(!error){
            resolve({name:"har", place:"palwal"});
        
        }
        else{
            reject("error occured") // reject is associated with the catch 
        }
    },1000)
})

prom1.then((user)=>{
    console.log(user);
    return user.name;
}).then((name)=>{ // parametere is passes which is return in previous then 
   // console.log(user);
    
    console.log(name);
    
}).catch(function(err){
    console.log(err);
    
}).finally(function(){
    console.log("everything executed properly");
    
})
    */

const prom1= new Promise(function(resolve,reject){
    setTimeout(function(){
        const error= false;
        if(!error){
            resolve({name:"har", place:"palwal"});
        
        }
        else{
            reject("error occured") // reject is associated with the catch 
        }
    },1000)
})

async function conprom() {
    try {
        const x = await prom1;
        console.log(x);
        
    } catch (error) {
        console.log(error);
        
    }
}
conprom();