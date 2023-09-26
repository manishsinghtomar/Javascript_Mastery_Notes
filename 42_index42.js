let numbers = [1,2,3];
// let numbers = new Array(1,2,3); //--> behind the scene
console.log(Object.getPrototypeOf(numbers));
// console.log(Array.prototype);
console.log(numbers);

function hello(){
    console.log("hello");
}
// prototype
console.log(hello)