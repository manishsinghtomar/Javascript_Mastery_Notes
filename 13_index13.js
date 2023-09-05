// map method 

// it also takes callback as input.
//it always create new array.
//Generally, it takes elements one by one and perform some operation and stores into newArray.
// return statement in function is mendatory.

const numbers = [3,4,6,1,8];

const square = function(number){
    return number * number;//by default it returns undefined.in case we dont write this statement output would be like [undefined,undefined,undefined,undefined,undefined]  
}

// const squareNumber = numbers.map(square);


const squareNumber = numbers.map((number,index) => {
    return `index: ${index}, ${number*number}`;
});
console.log(squareNumber);



//new example

const users =[
    {firstName:"Manish", age:23},
    {firstName:"Sonal", age:23},
    {firstName:"Jatin", age:13},
    {firstName:"ankit", age:9},
]

const userNames =users.map(user => {
    // return `${user.firstName},${user.age}`;
    return user.firstName;
});

console.log(userNames);