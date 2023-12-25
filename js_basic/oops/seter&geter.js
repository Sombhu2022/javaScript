//seter and geter is a keyword, that provite to ability to use the function as a property...
// this technique is use to ES6 vertion in js .
//thats call object accessor.
class New{

    constructor(){
        console.log("constractor function")
    }

    //set is use when a value is set .
    set fun(color){
        console.log(color);
    }

    //get item is used when value get .
    fun2(){
        let name="sombhu das";
        console.log(name)
    }

    get _fun2(){
        console.log("this is geter method ..")
    }
    
}

console.log("***** this is seter and geter method ******")

let obj4= new New();

New.prototype.fun ="red"; // call seter function as a property.
obj4._fun2; // geter functon call as a object property 
obj4.fun2() // call normal function as a method in a class.