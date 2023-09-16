//what is prototype  
//Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype.

//let hello2 =[1,2,3];
let hello2 = new array (1,2,3);
console.log(hello2.prototype);


function hello(){
    console.log("hello world");
}
console.log(hello.prototype);

// const hello = {key1 : "value1"} //prototype not present
// const hello = ["value1","value2","value3"] //prototype not present

// javascript function ===> function + objects ( in js, we can treat functions as objects)

console.log(hello.name);//

//you can add your own properties

hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// name property --> tells function name;

// function provides more useful properties like call , apply and bind etc.

//function provides empty object that can be called prototype //{}


console.log(hello.prototype); // {} --> free empty object

if(hello.prototype){
    console.log("prototype is present");
}else {
    console.log("prototype is not present");
}

//only functions provide prototype property  

hello.prototype.abc= "abc";
hello.prototype.xyz= "xyz";
hello.prototype.sind = function(){
    return "lalalla";
};

console.log(hello.prototype.sind());

//by default array ka prototype array hi hota hai aur object ka prototype object hota hai but we can change  it into another type.
