
const hex="0123456789ABCDEF";

const randomcol=function(){
    let col ="#";
    for(let i=0; i<6; i++){
        col= col + hex[Math.floor(Math.random()*16)];
    }
    return col;
}
let x;
function colgen(){
    
 x =   setInterval(function(){
        document.body.style.backgroundColor=randomcol();
    },1000)
    return x;
}
function colstop(){
    clearInterval(x);
    x=null;
}

document.querySelector("#start").addEventListener("click", colgen)
document.querySelector("#stop").addEventListener("click", colstop)