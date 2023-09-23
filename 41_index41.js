//hasOwnProperty

function CreateUser(firstName , lastName , email, age , address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

CreateUser.prototype.about = function(){
    return `${this.firstName}  is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
}
CreateUser.prototype.sing = function(){
    return "la la la la";
}

const user1 = new CreateUser('manish','Tomar','manishtomar00mt@gmail.com',23, "delhi");
const user2 = new CreateUser('Sonal','Mishra','manishtomar00mt@gmail.com',23, "delhi");
const user3 = new CreateUser('Varun','Tomar','varuntomar3233@gmail.com',18, "delhi");

for(let key in user1){
    // console.log(key); (this will also show us prototype key in order to see only user1 property hasOwnPropery is used)
   if (user1.hasOwnProperty(key)){
    console.log(key)
   }
}