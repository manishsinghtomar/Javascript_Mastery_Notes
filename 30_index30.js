const user1 = {
    firstName : "Manish",
    age:22,
    about:function(){
        console.log(this.firstName,this.age);
    }
};

//short syntax
const user2 = {
    firstName : "Sonal",
    age:22,
    about(){
        console.log(this.firstName,this.age);
    }
}

user1.about();
user2.about();