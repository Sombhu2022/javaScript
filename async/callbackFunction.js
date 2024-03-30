//A callback is a function passed as an argument to another function


let positive_arr= new Array()



let callback =(data)=>{
    
    positive_arr.push(data);
    
}

let new_function =(arr, callback)=>{ //callback is a function , that is use as a argument in  A function.
  
    arr.forEach(i => {
        
        if (i >0)
        callback(i)
    });
    


}

new_function([10,-9,9,4,-0,3,0,-2],callback)

setTimeout(()=>{
    console.log("this is positive array:",positive_arr)

} ,1500)

