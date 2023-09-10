//proto , prototype , class


const user={
    firstName: "Manish",
    lastName: "Tomar",
    email: "manishtomar00@mtgmail.com",
    age: 23,
    address: "house number , colony , pincode , state",
    about(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function(){
        return this.age >=18;
    }
};

const aboutUser = user.about();
console.log(aboutUser);

//function   (that function create object)
//2.) add key value pair
//3.) object ko return krega