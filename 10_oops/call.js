function set(name){
    this.name= name;
}

function setter(name,place){
    set.call(this,name); // here this will call set and declare name 
    this.place=place;
}

const x = new setter('har','pal');
console.log(x);
