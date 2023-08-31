//objects (reference type)
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs
//objects don't have index 

// how to create objects 

const person = {
    name: "Manish", 
    age:22,
    hobbies:['guitar','sleeping','listening music']
};
console.log(person);

// how to access data from objects
console.log(person.name);
console.log(person["name"]);//another way obj["key"]
console.log(person.age);
console.log(person.hobbies[1][2]);

// how to add key value pair to objects
person.gender ="male";
person["profession"] = "Engineer";//another way to add key obj["key"];
console.log(person);


