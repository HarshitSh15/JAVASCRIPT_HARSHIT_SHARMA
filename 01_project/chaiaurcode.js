const buttons = document.querySelectorAll(".button"); // create a node list of button

const body= document.querySelector("body");

buttons.forEach((nums)=>{
    console.log(nums);
    nums.addEventListener("click", function(e){ // apply event listner to  every button in the buttons nodelist 
        console.log(e);
        console.log(e.target);// from which the event is coming
        if(e.target.id==="grey"){
            body.style.backgroundColor= e.target.id
        }
        else if(e.target.id==="white"){
            body.style.backgroundColor= e.target.id
        }
       else if(e.target.id==="yellow"){
            body.style.backgroundColor= e.target.id
        }
       else if(e.target.id==="blue"){
            body.style.backgroundColor= e.target.id
        }

    })
})
