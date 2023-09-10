// console.log(window);
//in strict mode clg(this) returns undefined

function myFunc(){
    "use strict"
    console.log(this);
}
myFunc();

//function borrowing (call , apply , bind)
//we can borrow function from other object and use it with the data other object.

function drama (hobby , favMusician){
    console.log(this.firstName, this.age , hobby ,favMusician);
}

const user1 = {
    firstName : "Manish",
    age:9,
    about: function(hobby , favMusician){
        console.log(this.firstName, this.age , hobby ,favMusician);
    }
}
const user2 = {
    firstName : "Sonal",
    age:22,
}

user1.about.call(user2,"guitar","moazrt");//this ki binding user2 k sath hogi.

drama.call(user2, "swimming", "TheWeeknd");

//---------------------------------------------------------//
//apply
//in apply , we have to pass list or array as an input in function.
drama.apply(user2,["hookup with manish","--->Akon"])

//---------------------------------------------------------//

//bind 
// it gives you the copy of method that can be invoked later. 

const func = drama.bind(user2, "dating manish,", "david");
console.log(func);
func();  