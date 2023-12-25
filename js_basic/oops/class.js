console.log("********* this is class **********");

class Parson{
    constructor(name,age){
        this.name=name
        this.age=age
        console.log("your name :", this.name , "   Age:",this.age)
    }

    cirtificate(feedback , sign){
             this.feedback=feedback
             this.sign=sign
             console.log("we are cirtify them your are very", feedback , "        signeture of the hod :", sign)
    }

}

let new_object= new Parson("sombhu das",21)

let create_object=Object.create(Parson.prototype)

console.log("this is object :   ",create_object)