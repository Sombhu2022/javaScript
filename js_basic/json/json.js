//const { reject } = require("async");


async function fun(){
   
    let request = await fetch('../json/data.json')
    let response = await request.json()

    return new Promise((resolve, reject) => {
        resolve(response)
    }).then((result) => {
           console.log(result)
        
        }).catch((err) => {
            
            console.error(err)
         
    });
}

fun();


// async fun



let fun2 = async ()=>{

    const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=fishermans%20wharf&language=en';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '88ca66149amsh092fecbd4ace012p11125djsn5b5baf5bed45',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fun2()

