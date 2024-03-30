//object access with for in loop ..

 const obj3 = 
    {
        name:"sombhu ",
        age:30
    }
 

console.log("*******")

 for(const pro in obj3){
    console.log(`${pro}:${obj3[pro]}`);
 }





 //objects arrays how to "refarence" are passed to variable..
 let arrr=[5,5.6,5.0,9.0,2.4,2.5]

 let arr_ref=arrr;

 console.log(arr_ref)
 