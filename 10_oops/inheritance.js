class a{
    constructor(name){
        this.name= name;
        

    }

    printme(){
        console.log(this.name);
        
    }
    static hello(){
        console.log('hello'); // this cant be accessed by thr innstace of this class or by the child class instance 
        
    }
}

class b extends a{
    constructor(name,place){
        super(name);
        this.place=place;
    }

    printer(){
        console.log(this.place);
        
    }
}

const x= new a('har');

const y= new b('har','pal')

x.printme();
y.printme();
y.printer();
// x.printer(); this cant be accesed by the parent 