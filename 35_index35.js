function hello(){
    console.log("hello world");
}

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