// find method
//it also takes callback function as input

const myArray = ["Hello", "cat","dog", "lion"];

// function isLength3(string){ 
//     return string.length === 3;
// }
//this fn() returns first string that satisfy given condition


//using arrow function
const ans = myArray.find((string)=>string.length===3);
console.log(ans);

const users =[
    {userId :1, userName: "Manish"},
    {userId :2, userName: "harsh"},
    {userId :3, userName: "Sonal"},
    {userId :4, userName: "Jatin"},
    {userId :5, userName: "Anjali"},
];

const MyUser = users.find((user)=>user.userId==3);
console.log(MyUser);


//for signal return statement we dont need to write return in arrow function.