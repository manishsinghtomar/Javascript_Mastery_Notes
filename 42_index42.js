let numbers = [1,2,3]; //we use this syntax because it is simple to write.

//javascript ko array k methods milte hai prototype se aur prototype sirf function ka hota hai but "numbers" toh function nhi hai  

//internally javascript array create karne k liye Array constructor call karta hai usko new lga kar call kra sakte hai

// let numbers = new Array(1,2,3); //--> behind the scene
// console.log(Array.prototype);

console.log(Object.getPrototypeOf(numbers)); //array of methods
console.log(numbers);

function hello(){
    console.log("hello");
}

// prototype
console.log(hello.prototype); // it is an object

hello.prototype = []; //type of prototype changed 
console.log(hello.prototype)
hello.prototype.push('2');