const manyHours = prompt("How many hours?");
let manyHoursNumber = null

if (manyHours && manyHours.trim()){
    manyHoursNumber = +manyHours;
}

if(manyHoursNumber > 0 || manyHoursNumber === 0){
   const result = manyHoursNumber*60*60;
    alert(result + " seconds!");
}

else{
    alert("Error! Enter the hours!");
}


