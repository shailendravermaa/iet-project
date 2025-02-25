let obj={
  ram:5,
  "shayam":12,
  mohan:89,
  radha:67,
  krishna:45
}

 const obj2=Object.create(obj)
   
// if(obj.Object.tostring in obj){
//   console.log("jai ho")
// }

if(Object.hasOwn(obj, "ram")){//this will  only check for its own properties, not those inherited from other 
  console.log("ram ram ram ram ")
}

if("radha" in obj){
  console.log("jai radha rani ki")
}

if("ram" in obj2){//this is also check for the inherited properties 
  console.log("radha radha radha radha radha ")
}
