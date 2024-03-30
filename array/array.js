//all array ...

let car=['volvo',"honda",[20,79,45,'som'],"thar", 'bmw'];
console.log(car);

// use at() function to get array element . this is able to get element revercely...

console.log(car.at(-3))


//map function use to print data ..
// map function return new array ... 

let datas=car.map(data=>{
       console.log(data)
})

//use filter function ..
// filter function return new array ...

let filter_data =car.filter((a)=>
{
    if(a =='volvo')
      return ['not']
    else
      console.log("......"+a)
})


// reduce method 
 array2 = [190,2,3,2]

 let reduce_value =0
 reduce_value= array2.reduce(
  (pre , cre , index , array)=>{
      
      console.log(pre , cre,  pre+cre);
      return cre 
  },  0/* 0-> this is call initial value , if intial value is not put then reduce method 
          take first element of the array as a previous value*/
)

console.log("this is reduce value:->", reduce_value)
