//Maps
// map is an iterable 

//store data in ordered fashion .

//store key value pair (like object)
// duplicate keys are not allowed like objects 

//different between maps and objects

//objects can only have string or symbol
//as key

// in maps you can use anything as key 
// like array, number , string.  


//object literals 
//key --> string
//key --> symbol
const person = {
    firstName : "Manish",
    age: 7,
      1:"one"  //here 1 is string   
}
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person["1"]);
for(let key in person){
    console.log(typeof key);
}

// key value pair
//key can be anytype 
const person1 = new Map();
person1.set('firstName', "Manish");//("key","value")
person1.set('age', 22);
person1.set(1,'one');
person1.set([1,2,3], 'onetwothree');
person1.set({1:'one'}, 'onetwothree')
// console.log(person1);
// console.log(person1.get(1));
// for( let key of person1) {
//     console.log(typeof key);//object 5 times
// }

//map itereable hai objects iterable nhi the hum object par for of loop nhi lga sakte but for in loop lga sakte hai 

// for(let key of person1){
//     console.log(Array.isArray(key));//true
// }

for(let [key, value] of person1){
    console.log(key , value);
}

const person2 = new Map([["firstName", 'Manish'], ['age',22]]);
console.log(person2);


//realistic Example
const person3 = {
    id: 1,
    firstName: "Manish"
}
const person4 = {
    id: 2,
    firstName: "Sonal"
}

const extraInfo = new Map();
extraInfo.set(person3,{age:22 , gender: 'male'});
extraInfo.set(person4,{age:22 , gender: 'Female'});
//  console.log(extraInfo);
console.log(person3.id);
console.log(extraInfo.get(person3).gender);
console.log(extraInfo.get(person4).gender);