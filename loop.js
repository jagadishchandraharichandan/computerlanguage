const array =[1,2,3,4,5];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
const count =0;

while(count<5){
    console.log("count is:" + count);
    count++;
    
}
let num =0;
do{
    console.log("raja");
    num++;
}while(num <7)



console.log(sayname);
function sayname(name){   //function declaretion
    console.log(name);
}
sayname("pandu")

// arrow function
console.log(sayname);
const sayname = (name) =>{   //here name is arguement
    console.log(name);
}
// sayname("hemupandu")   //here hemupandu is parameter/function invocation/function call



const age =22;
if(age>18){
    console.log("i'am ana adult");
}else{
    console.log("i'am under 18");
}




// const age =17;
age > 18 ? console.log("i'm an adult"): console.log("i'm under 18");



//nullish coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? undefined ?? 20

// console.log(val1);

//optional chaning
const adventure = {
    name:'alice',
    cat: {
        name: 'dinah',
    },
};
const dogname=adventure.dog?.name;
console.log(dogname);