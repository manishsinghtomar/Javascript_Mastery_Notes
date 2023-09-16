// Use prototype



//function (that funciton creates object)
//2.) add key value pair
//3.) object ko return krega
function createUser(firstName , lastName , email, age , address){
    const user= Object.create(createUser.prototype);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
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


const user1 = createUser('manish','Tomar','manishtomar00mt@gmail.com',23, "delhi");
const user2 = createUser('Sonal','Mishra','manishtomar00mt@gmail.com',23, "delhi");
const user3 = createUser('Varun','Tomar','varuntomar3233@gmail.com',18, "delhi");

console.log(user1);
console.log(user2.about());
// console.log(user3.sing());