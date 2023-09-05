//important array methods

// forEach
// map**
// filter
// reduce**


//1) forEach :-
const numbers = [4,2,5,8];

function myFunc(number, index){
    console.log(`index is ${index} and number is ${number}`);
    console.log(`${number}*2 = ${number*2}`);
}

// for( let i in numbers){
//     myFunc(numbers[i],i);
// }

numbers.forEach(myFunc);//forEach passes array elements one by one with its index in given function as arguments.

numbers.forEach(function(number,index){ 
    console.log(`${index} is index and ${number}`)
})
//arguments order should be like number then index. (index is not mendatory).


//realistic example

const users =[
    {firstName: "Manish", age: 23},
    {firstName: "Mohit", age: 21},
    {firstName: "Jatin", age:22},
    {firstName:"Sonal", age: 23},
]

// users.forEach(function(user){
//     console.log(user.firstName);
//     console.log(user.age);
// });

//using arrow function (for single parameter "()" can be removed like : user=>{})

users.forEach((user,index) =>console.log(user.firstName,index));





// for(let user of users){
//     console.log(user.firstName);
// }
