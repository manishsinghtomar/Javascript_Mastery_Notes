// new keyword
function createUser(firstName , age){
    this.firstName = firstName;
    this.age = age;
}

const user1 = new createUser("harshit", 6);

// new keyword
// 1.) first it create empty object --> this = {}
// 2.) return this 
// 3.) 

console.log(user1);
user1.about();