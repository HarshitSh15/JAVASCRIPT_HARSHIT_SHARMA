const clock= document.querySelector("#clock");

setInterval(function(){
    const date = new Date();
    clock.innerHTML= date.toLocaleString();
},1000)