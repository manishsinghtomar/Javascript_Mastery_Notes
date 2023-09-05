//difference between dot and bracket notation
const key = "email";
const person = {
    name: "Manish",
    age:22,
    "person hobbies" :[ "guitar", "sleeping", "listening"]
}

// console.log(person["person hobbies"]);
person[key] = "manishtomar00mt@gmail.com" // without "" key will replace by its value 
console.log(person);



//how to iterate object

const person1 = {
    name: "Manish tomar",
    age:22 ,
    "person hobbies": ["guitar","sleeping","listening"]
}

//there are 2 ways to iterate object 
//1.) for in loop
//2.) Object.keys 

//using for in loop
for (let key in person1){
    // console.log(person1[key]);
    // console.log(`${key} : ${person1[key]}`);
    console.log(key,":", person1[key]);
}


//Object.keys
console.log(Object.keys(person1));
console.log(typeof Object.keys(person1));
const val= Array.isArray(Object.keys(person1));
console.log(val);

for(let key of Object.keys(person1)){
    console.log(person1[key]);
}
