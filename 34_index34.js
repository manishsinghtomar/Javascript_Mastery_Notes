//important - application of object
const userMethods ={
    about: function(){
        return `${this.firstName} is ${this.age} years old and live in ${this.address}`;
     },
    is18: function(){
        return this.age>=18;
     },
    sing:function(){
        return 'tun naa na na la la ';
    } 
}

//function (that funciton creates object)
//2.) add key value pair
//3.) object ko return krega
function createUser(firstName , lastName , email, age , address){
    const user= Object.create(userMethods);// hence userMethod become the proto of user mean it can use the key value pair of userMethod object. 
    // we dont need to define methods again and again like user.MethodName = MethodName;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;
    return user;
}

const user1 = createUser('manish','Tomar','manishtomar00mt@gmail.com',23, "delhi");
const user2 = createUser('Sonal','Mishra','manishtomar00mt@gmail.com',23, "delhi");
const user3 = createUser('Varun','Tomar','varuntomar3233@gmail.com',18, "delhi");

console.log(user1);
console.log(user2.about());
console.log(user3.sing());