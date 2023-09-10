// methods

// function inside object
//"this" is an object that calls function inside object

// function personInfo(){
//        firstName
// }

// const person = {
//     firstName : "Varun",
//     age:8,
//     about: function(){
//         console.log(`person name is ${this.firstName} and person age is ${this.age}`);
//         console.log(this);
//     }
// } 
// person.about();

function personInfo(){
    console.log(`person name is ${this.firstName} and person age is ${this.age}`)
}

const person1 ={
    firstName : "Manish",
    age:22,
    about: personInfo
}

const person2 ={
    firstName : "Sonal",
    age:22,
    about: personInfo
}

const person3 ={
    firstName : "Arushi",
    age:22,
    about: personInfo
}

const person4 ={
    firstName : "Varsha",
    age:24,
    about: personInfo
}
person2.about();
person1.about();



//----------------------------------------------------------------------------------//

// console.log(window);

console.log(this)// this will give us window object. 
console.log(window)//same as above statement this will also give us window object

function myFunc(){
    console.log(this);
    console.log("hi manish")
}
// myFunc();
window.myFunc();