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

//block scope vs function scope

//let and const are block scope
//var is function scope 