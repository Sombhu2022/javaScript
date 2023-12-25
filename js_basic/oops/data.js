console.log("...... the oops feturs .....");

//constractor function
 let Car=function(color,model){
         this.color=color;
         this.model=model;
         console.log(this.color , this.model)
 }

  let new_obj = new Car("red",2090);
   console.log(new_obj)

   //prototype is a pre define keyword .. that is use to store pre define method and data.
   console.log(Car.prototype)
  console.log(new_obj.__proto__)//if we create object then used "__proto__" keyword. otherwise use "prototype".


  // add new data and method used prototype .

Car.prototype.data= "this is prototype data";

  Car.prototype.show= function(datas){
         this.datas=datas//datas are print the paramiter value.
    console.log(this.datas ,"      ", this.data)//data are print prototype data value . 

  }

let show=Car.prototype.show("this is method")  
console.log(show)


