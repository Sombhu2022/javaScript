// new object decliaration .

let student = new Object();
let review =(star)=>`${star} star reting`
// that contin proparty and values.
student ={
    name:"sombhu", // string proparty
    roll:1050, //number proparty
    sub:['ben','eng','math'], //array proparty
    
    address:{    //object proparty
        vill:"rela",
        po:"bandhuchak",
        state:"west bangal",
        pin:721443,
    },
    
    cirtificate:function(name,roll){    //method . --> when function write in the object then this function is called method .
        return(`${this.name} is a good boy , address:${this.address}`) // this keyword is use to return curent calling value.
    },

    feedback:review(4.7),//feedback not a function , couse -> review function is called as a proparty , so return value of the review function shoud be print

    }




// print object method data
console.log(student.cirtificate())

//print object proparty in the object .
console.log(student.address)

//other read process of object value .
console.log(student["sub"])

//update value 
student.name="koushik";
console.log(student)

//object proparty pass by the variable .
let std_name="name";
//node--->  when object proparty used as a variable then -> used  student[<variable_name>] . not used student.<variable_name>
console.log(student[std_name])

// delete object value
delete student.sub
console.log(student)

//
console.log(student.feedback)