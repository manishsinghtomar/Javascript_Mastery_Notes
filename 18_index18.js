//every method
//  it also take callback as input.
//it returns boolean values that either be True or false.
//it returns true if all elements of array satisfies given condition else it returns false.
const numbers = [2,4,6,8,10];

// function isEven(number){
//     return number % 2 ===0;
// }

const ans = numbers.every((number)=>number%2===0);
console.log(ans)
//callback function  --->  true / false (boolean)

//every method ---> true / false (boolean)


// realistice example:

const userCart =[
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 32000},
    {productId: 3, productName: "tv", price: 15000},
];


//check every product.price < 30000 

const answer = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(answer);


