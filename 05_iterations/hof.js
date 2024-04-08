//Hof
// let array=["raja","jaga","jagadish","hari","chandra"];

// array.forEach((el)=>console.log(el));

// for(let index = 0;index <array.length; index++){
//     console.log(array[index]);
// }


// array.map((el)=>console.log(el));



// const mynew_array = array.map((el)=> console.log(el));
// console.log(mynew_array); //it returns a new array



// let temp =[30,40,50,20,30,20,30];
// let result = [];
// for (let index = 0; index < temp.length; index++){
//     result.push(temp[index]);
// }
// console.log("temperature",result);


let temp = [20,30,40,50,20,30,60,90];
// let result=[];
// if(temp>20){
//     console.log("temperature",result);
// }else{
//     console.log("normal temp",result);
// }

// const result = temp.filter((el) => el > 20);
// console.log(result);            // filter returns a new array based upon 

const result = temp.filter((el) =>{
    return el > 20;
})
console.log(result);