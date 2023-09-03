// filter method:-

//it also take callback function as input.
//callback of filter should return boolean value either true or false.
//it also give newArray.
//it takes the items of array one by one and apply condition on them whether condition is true or false if condition is true then it plugin that item into new array.

const numbers = [1,3,2,6,4,8];

const isEven=function(number){
    return number%2===0;//if true then plug in otherwise ignore; 
}

// const EvenNumbers = numbers.filter(isEven);
// console.log(EvenNumbers);

//using arrow function

const EvenNumbers = numbers.filter(number=>{
    return number%2===0;
});
console.log(EvenNumbers);
