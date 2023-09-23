// new keyword
function createUser(firstName , age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about=function(){
    console.log(this.firstName, this.age);
}

const user1 = new createUser("Manish", 22);//user1  

// WORKING OF NEW KEYWORD

// 1.) first, it create empty object like  this = {} 
// 2.) return this 
// 3.) Object.create(createUser.prototype);    (it set the prototype of function as __proto__ relation bnane wala kaam yeh new keyword krega , agar javascript ko createUser m value nhi milegi toh wo createUser.prototype me dhundega.)

console.log(user1);
user1.about();