// optional chaining
//it is used for nested objects.
const user = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}

// let user;
console.log(user?.firstName);  
console.log(user?.address?.houseNumber);