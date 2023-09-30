//2015 / es6
// class keyword
// classes are fake 

class CreateUser{
    constructor(firstName, lastName , email, age , address){
        console.log("constructor called");  
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    

    about(){
        return `${this.firstName} is ${this.a}`;
        }
    is18(){
        return this.age >=18;
    }
    sing(){
        return "la la la la ";
    }
    func(params) {
         console.log(params);
    }
}

const user1 = new CreateUser('Manish', 'tomar','manishtomar00mt@gmail.com', 22,'Delhi');
const user2 = new CreateUser('jatin','Gupta','jatingupta@gmail.com', 21,'uttarpradesh');
const user3 = new CreateUser('Ankit', 'Navati','ankitnavati@gmail.com', 24,'Bihar');
console.log(user1.is18());
console.log(Object.getPrototypeOf(user1));
user1.func("Manish");
//-------------------------------------------------------------------------//

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return true;
    }
}


const animal1 = new Animal("tom",2);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isCute());

// dog class
class Dog extends Animal{
    
    
}

const tommy = new Dog("tommy", 3);
console.log(tommy.isCute());
console.log(tommy.eat());