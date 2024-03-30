// fatch api

//we used aync function for fatching api .
let api = async () => {
  //fatch()  function use to fatch api data .
  //custom api fatch
  let response = await fetch("../API/customjson.json");

  // then convertiong fatch data into json data .
  let data = await response.json();

  let arr = new Array();
  // json data is a array . so we used map fun , to get all element of the array.
  data.map((value) => {
    arr.push(value);
  });

  arr.map((element) => {
    console.log(element);
  });
};

api();
