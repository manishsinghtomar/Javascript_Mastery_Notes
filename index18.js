//every method
//  it also take callback as input.
//it returns boolean values that either be True or false.
//it returns true if all elements of array satisfies given condition else it returns fails
const numbers = [2,4,6,8,10];

// function isEven(number){
//     return number % 2 ===0;
// }

const ans = numbers.every((number)=>number%2===0);
console.log(ans)
//callback function  --->  true / false (boolean)

//every method ---> true / false (boolean)



