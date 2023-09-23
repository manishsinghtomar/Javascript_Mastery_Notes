// solution using object.create

const obj1 ={
    key1: "value1",
    key2: "value2",
}


// const obj2 ={
//     key3: "value3",
// }

// console.log(obj2.key1) //undefined

// const obj2 ={};
// there is one way to create empty object
// obj2.key3= "value3";
// console.log(obj2.key3);

//--------------------------------------------------------//

// __proto__ 

// offical ecmascript documentation

// [[prototype]]

// __proto__ or [[prototype]] (both are same)

//when an object is created in javascript, Javascript engine adds a __proto__ property to the newly created object which is called dunder proto or __proto__ 

//--------------------------------------------------------//
// prototype and dunder proto both are different 

const obj2 = Object.create(obj1);// it returns empty object or {}
//there is one more way to create empty object.
obj2.key3 = "value3";
obj1.key2= "unique";
console.log(obj2);
console.log(obj2.key2);
//javascript phele object me value check kregi agar waha nhi hui toh __proto__ me check kr k value fetch kregi 

console.log(obj2.__proto__);

//abhi hamne baat ki __proto__ ki jisko documentation mein [[prototype]] likha hua hai browser ke console mei __proto__ bhi likha ho sakta hai aur [[prototype]] bhi likha ho sakta hai 
//javascript mein ek prototype property alag se bhi hoti hai uske barein mai detail mein baat krege.
