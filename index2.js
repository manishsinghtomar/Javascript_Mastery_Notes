//for in loop in array 
const fruits = ["apple", "mango", "grapes" , "jackfruit"];
const fruits2= [];

for(let index in fruits){
    // console.log(fruits[index]);
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);

for(let i= 0 ; i<fruits2.length; i++){
    console.log(fruits2[i]);
}

// **array destructuring**

// const myArray=['value1', 'value2' ,"value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log(myvar1 , myvar2);
// const [myvar1,myvar2,...newmyArray] = myArray;//we dont need to declare myvar1 myvar2 and newmyArray
 const myArray=["value1"];

let[myvar1,myvar2, myvar3] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log("value of myvar3", myvar3);
// console.log(newmyArray);


const arr= ["value1", "value2", "value3"];
let [myvariable1, , myvariable2]= arr;//use ", " in order to skip value;
console.log(myvariable1);
console.log(myvariable2);

