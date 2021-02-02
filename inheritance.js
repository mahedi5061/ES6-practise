class Parent{
    constructor(){
        this.fatherName="Schwerznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
}

const childName=new Child("Arnold");
console.log(childName);