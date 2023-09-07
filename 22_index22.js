// Sets (it is iterable)
// store data
// sets also have its own methods like has(),add() etc.

// NO index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

const numbers = new Set([1,2,3,3]);
const str = new Set("manish");
console.log(numbers);
console.log(str);
console.log(str.length);//undefined 
console.log(numbers[2]);//undefined (index based access not allowed)

//adding elements in set
numbers.add(5);
numbers.add(2);
console.log(numbers);
numbers.add(["item1","item2"]);//memory locations of both arrays are different in memory so javascript will treat them differently .
numbers.add(["item1","item2"]);
console.log(numbers);

if(numbers.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}

for(let number of numbers){
    console.log(number);
}

const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
//way to calculate length in set.
let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);