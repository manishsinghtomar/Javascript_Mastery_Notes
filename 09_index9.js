//nested destructuring

const users = [
    {userId: 1, firstName: 'Manish',LastName:'Tomar', gender: 'male'},
    {userId: 2, firstName: 'Sonal',LastName:'Mishra', gender: 'Female'},
    {userId: 3, firstName: 'Ayushi',LastName:"upreti",  gender: 'Female'},
]

// const [user1, user2, user3]= users;
// console.log(user2);
// console.log(user2.firstName);

const[{firstName:user1firstName,userId}, ,{gender:user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);