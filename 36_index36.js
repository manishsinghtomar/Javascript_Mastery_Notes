// Use prototype

//-------------------------------------------------------------------------------------
// const user1 = {
//     firstName: "Manish",
//     lastName: "Tomar",
//     email:"manishtomar00mt@gmail.com",
//     age: 22,  
//     address: "House Number, Colony, pincode, state", 
//     about: function(){
//         return  `${this.firstName} is ${this.age} years old`    
//     },
//     is18: function(){
//       return this.age >= 18;
//     }
// }
//----------------------------------------------------------------------------------------
 
//function (that funciton creates object)
//2.) add key value pair
//3.) object ko return krega

const userMethods ={
    about: function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function(){
        return this.age >=18;
    }
}

//-----------------------------------------------------------------------------------------
function createUser(firstName , lastName , email, age , address){
    const user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
// about: function(){
 //   return  `${this.firstName} is ${this.age} years old`    
 // },
 // is18:function(){
 //   return this.age >= 18;
 // }

//another way (method separation method)
user.about = userMethods.about; //reference hai yeh  or  hum address likh rahe hai userMethods k about method ka
user.is18 = userMethods.is18;

    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old and live in ${this.address}`;
 };

createUser.prototype.is18 = function(){
    return this.age>=18;
 };
createUser.prototype.sing = function(){
    return 'tun naa na na la la ';
};


const user1 = createUser('manish','Tomar','manishtomar00mt@gmail.com',22, "delhi");
const user2 = createUser('Sonal','Mishra','manishtomar00mt@gmail.com',22, "Bihar");
const user3 = createUser('Varun','Tomar','varuntomar3233@gmail.com',18, "delhi");

console.log(user1);
console.log(user2.about());
// console.log(user3.sing());


