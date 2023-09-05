//hoisting 

hello();

function hello(){
    console.log("hello world");
}//output- hello world


// //this will not work in case function expression
// hello1() 

// const hello1 = function(){
//     console.log("hello1 world");
// }//output - error

console.log(hello);
var hello = "mishraji";  //this will not work in case of const, let 
console.log(hello);


//----------------------------------------------------------------------------------------------//
//block scope vs function scope

//let and const are block scope
//var is function scope 

{
    var firstName= 'manish';//not working with const and let
}
console.log(firstName);
{
    console.log(firstName);
}

function myApp(){
    if(true){
        // let happycat = " jhoom";//error
        var happycat = " jhoom";
        console.log(happycat);
    }
    console.log(happycat);
}

myApp();


//--------------------------------------------------------------------------------------------//
 //default parameters

//  function addTwo(a,b){
//      if(typeof b ==="undefined"){  //before es2015 syntex
//          b=0;
//         }
//         return a+b;
//  }

 function addTwo(a,b=0){
    return a+b;
 }

const ans = addTwo(4,8);
console.log(ans);



//---------------------------------------------------------//

//rest parameters

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(3,4,6,7,8,99,6);


function addAll(...numbers){
    // console.log(numbers);
    // console.log(Array.isArray(numbers));
    let total = 0;
 for(let number of numbers){
    total= total+ number;
 }
 return total;
}
const answer = addAll(1,2,3,4,5);
console.log(answer);


//parameter destructuring

//object
//react

const person ={
    firstName: "Manish",
    gender : "male",
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

function printDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);// undefined
}

printDetails(person);