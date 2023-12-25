class Parent {
     data="soombhu das";
    constructor(name,age){
        this.name=name;
        this.age=age;
         console.log(this)
    }

}

class Chield extends Parent{
    constructor(name,age,sub){
        super(name,age)
        this.sub=sub
        console.log(name,sub,age)
    }
}

console.log("****** this is inheritance ****")

//new Parent("sombhu", 30,"o");
new Chield("sombhu" , 90, "uk");

Chield.prototype.proto_fun= function(){
         console.log("this is proto function ");
}

Chield.prototype.proto_fun() //function calling with prototype .
