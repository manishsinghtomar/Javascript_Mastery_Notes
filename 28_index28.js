const user = {
    firstName:"Manish",
    surName:"Tomar",
    about: function(){
        console.log(this.firstName,this.surName);
    }
}

// don't do this mistake 

// user.about();
const myFunc = user.about;//output: undefined undefined
//const myFunc = function(){
// console.log(this.firstName,this.surName);
// };
myFunc();


//correct way
const myFunc1 = user.about.bind(user);// user k about method ko bind kr do user ki properties k sath then uski copy save kr do myFunc1 mein
myFunc1();