// Math is a object in the js . Math obj consist some methods.


console.log("some math method")
console.log(Math);

// find area of the circle , where r=3.
let area=Math.PI*Math.pow(3,2);
console.log(area)

//if we get to only intiger value of the area then ...
console.log(Math.trunc(area))

//if we get after intiger value of the number or area.
console.log(Math.ceil(area))

//if we get before intiger value of the number or area.
console.log(Math.floor(area))

//round value .
console.log(Math.round(2.3));
console.log(Math.round(2.8));

//random number . return 0 to 1 float value. 
console.log(Math.random())

//if we get to 0-1000 random value.
console.log(Math.round(Math.random()*1000)) 
