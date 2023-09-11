//proto , prototype , class


// const user={
//     firstName: "Manish",
//     lastName: "Tomar",
//     email: "manishtomar00@mtgmail.com",
//     age: 23,
//     address: "house number , colony , pincode , state",
//     about(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >=18;
//     }
// };

// const aboutUser = user.about();
// console.log(aboutUser);

//--------------------------------------------------------//

// Create functions to create multiple objects

//function   (that function create object)
//2.) add key value pair
//3.) object ko return krega

function createUser(firstName , lastName , email, age , address){
     const user= {};
     user.firstName = firstName;
     user.lastName = lastName;
     user.email = email;
     user.age = age;
     user.address = address;
     user.about = function(){
        return `${this.firstName} is ${this.age} years old and live in ${this.address}`;
     };
     user.is18 = function(){
        return this.age>=18;
     }
     return user;
}

const user1 = createUser('manish','Tomar','manishtomar00mt@gmail.com',23, "delhi");
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);
console.log(is18);

