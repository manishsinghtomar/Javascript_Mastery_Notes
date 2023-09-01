//objects inside array
// very useful in real world applications

const users = [
    {userId: 1, firstName: 'Manish',LastName:'Tomar', gender: 'male'},
    {userId: 2, firstName: 'Sonal',LastName:'Mishra', gender: 'Female'},
    {userId: 3, firstName: 'Ayushi',LastName:"upreti",  gender: 'Female'},
]
for(let user of users){
    // console.log(user);
    console.log(user.userId);
}