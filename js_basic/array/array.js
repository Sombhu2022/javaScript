//all array ...

let car=['volvo',"honda",[20,79,45,'som'],"thar", 'bmw'];
console.log(car);

// use at() function to get array element . this is able to get element revercely...

console.log(car.at(-3))


//map function use to print data ..

let datas=car.map(data=>{
       console.log(data)
})

//use filter function ..

let filter_data =car.filter((a)=>
{
    if(a =='volvo')
      return ['not']
    else
      console.log("......"+a)
})


// reduce method 

let reduce_value= car.reduce((a,b)=> a+b)

console.log(reduce_value)
