// reduce
//this method also takes callback function as input 

const numbers = [1,2,3,4,5];

// aim : sum of all the numbers in array 

const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
},0); //reduce(callback,initialvalue)//mentioning initialvalue is not necessery

console.log(sum);
// accumulator , currentValue , return 
//   1                2           3
//   3                3           6
//   6                4           10
//  10                5           15 
//  15                10          25


const userCart =[
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice , currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0)
console.log(totalAmount);

// total price      currentValue        return
//  0                 12000              12000
// 12000             22000               34000
// 34000             15000               49000


let total =[2,3,4,5].reduce( (a,b) => a + b);
console.log(total);

let multi =[2,3,4,5].reduce( (a,b) => {
    console.log(a,b)
    return a * b;
},1);  //initial value has been added;

console.log(multi);

