// call method 

//parrent obj 
let Name={
    name: function(sub,msg){
         console.log("subject:"+sub+ "hii"+this.f_name + " " + this.l_name +"  masage:"+ msg);

    }
}

//chiled obj
let parson={
    f_name:"sombhu",
    l_name:"das",
}

//use call method with paramiter
Name.name.call(parson,"intanship job       . ","you are able for intanship job")

//use apply method , with paramiter .
Name.name.apply(parson,["intanship job    ","you are able for intanship job"])
