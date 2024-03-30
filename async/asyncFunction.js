// async function ...

//create xml request...




//pomise 

let promice=new Promise(function(getValue , error){

    let request =new XMLHttpRequest()


request.open('GET', 'https://jsonplaceholder.typicode.com/todos');


request.onload=function(){
    if (request.status == 200)
        getValue(request.responseText)
    else // if(request.status == 400)
        error(request.status)
         
}

function getValue(value){

    console.log(value);

}

function error(data){

    console.log(data);
}

request.send()


})


