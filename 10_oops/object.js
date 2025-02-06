function cretion(name,score){
    this.name=name;
    this.score=score;

}

cretion.prototype.increment= function(){ // prototype is making for the new functionality 
    this.score++;
    return this.score;

}

const x = new cretion("name", 52);

console.log(x.increment());
