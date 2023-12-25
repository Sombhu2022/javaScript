// A JavaScript Promise object can be:


// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.



console.log("*** promise ****")

// create new promise

let promise = new Promise((resolve, reject)=>{

    let request =new XMLHttpRequest()


    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    
    if (request.status == 200)
        resolve(request.response)
    else 
        reject(request.status)  
    
        

 request.send();       
    
   }).then((value)=>{

           console.log("print the value " , value)
   }).catch((error)=>{

           console.log("error : " , error)
   }
   
)


//promise using function return

let arrow=()=>
{
        return new Promise((success , fail)=>{
               let value=20;
                success(value)//at a time one function are call
                //fail()


        }).then((result) => {
                
                console.log("result :", result)
                
        }).catch((err) => {
                console.log("error:", err)
                
        });

}

arrow();