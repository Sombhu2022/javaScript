// this is a async function .... 



// asynchronous Functions running in parallel with other functions are called asynchronous

//A good example is JavaScript setTimeout()

function set(){
    console.log("this is async function")
}

//run one time with 3s delay
setTimeout(set, 3000) //delay 3s


//setinterval function run continiusly with 5s delay.

// setInterval(()=>{
//     console.log("this is setInterval function .")
// }, 5000) // delay 5s


//async function used 

let async_function = async ()=>{
//used async keyword when we initialinz asyncronize function .
       
    //set url 
    const url = 'https://jsonplaceholder.typicode.com/todos';

    //set options
    const options = {
        method: 'GET',
        headers: {
           }
    };

    
    
    try {

        /*await function used, when we get huge data from the api , then await propartice 
            hold the statment and waiting for full fatching of api      */
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("the result is : ",result);
        
        result.forEach((element)=>{

            console.log(element["id"])

        })
        
    } catch (error) {
        console.error(error);
    }

}

setTimeout(async_function(),5000)