// arrow functions
//in arrow function , 'This' refers to window object.
const user1 = {
    firstName : "Manish",
    age:5,
    about:()=>{
        console.log(this.firstName,this.age);
    }
}

user1.about(user1);//undefined undefined
user1.about.call(user1);//undefined undefined