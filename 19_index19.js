//some method
//this method takes callback as a input.
//It returns a boolean value after plugging in array elements one by one into the callback function.
//It returns true if at least one element satisfies the given condition; otherwise, it returns false.

const numbers = [3,5,8,9];

//kya ek bhi number esa hai jo even hai 
// true 

const answer = numbers.some((number)=>number%2===0);
console.log(answer);

const userCart =[
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 32000},
    {productId: 3, productName: "tv", price: 15000},
    {productId: 3, productName: "macbook", price: 250000},
];

const ans = userCart.some(number=>number.price>50000);
console.log(ans);