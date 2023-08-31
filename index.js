// declare constants
const pi = 3.14;

// pi=34; we can't declare const again
console.log(pi);

//types of operator

//data types (primitive data types)
//string "manish"
//number 2,4,5,6.5
//booleans
//undefined
//null
//BigInt
//Symbol

//string indexing

let firstName = "Manish";
console.log(firstName)

// M a n i s h 
// 0 1 2 3 4 5
console.log(firstName[0])
console.log(firstName.length)// length of string 
// firstName.length

console.log(firstName[firstName.length-1])
// last Index: length - 1

// trim()  -it returns new string
let vehicle = "  car "
console.log(vehicle.length)
let newvehicle = vehicle.trim(); //"car"
console.log(newvehicle.length);

// toUpperCase() - it also returns new string
console.log(firstName.toUpperCase());

// toLowerCase() - it also returns new string
console.log(firstName.toLowerCase());

// slice (start index , end+1 index)
let Word = "advanture";
// let newWord = Word.slice(0,6);
let newWord = Word.slice(2);
console.log(newWord); //output - vanture


//arrayMethod
let firstName1 = "  Manish  "; 
let newString = firstName1.trim();
console.log(newString);
console.log(newString.length)

//template String
let Myage =23;
let firstnickname = "Masterji"

//for example : "my name is Masterji and my age is 23"
//let aboutMe = "my name is " + firstnickname + " and my age is " + Myage;
//another way using backtics

let aboutMe = `my name is ${firstnickname} and my age is ${Myage}`
console.log(aboutMe);

//undefined
let food;
console.log(typeof food);
food = "momos"
console.log(typeof food);

//null
let Variable = null;
console.log(Variable);
console.log(typeof Variable)// it will show "object" ;it is an error , bug
Variable="sdfsdf";
console.log(typeof variable);


//BigInt 
let MyNumber = BigInt(34);
let sameMyNumber = 34n;// there are 2 ways to declare Bigint 
// console.log(Number.MAX_SAFE_INTEGER); //limit of number 

console.log(MyNumber+ sameMyNumber);// addition is possible if datatypes are same otherwise we will get error bigIng(34)+ 34 =>Error


//booleans & comparison operator 
//booleans - true ,  false
let num1 = 5;
let num2 = 7;

console.log(num1>num2); //output- false

// == vs ===
let num3 = 3;
let num4 ="3";
console.log(num3 == num4); //it checks the values only;
console.log(num3 === num4); // it checks the values as well as types;

// != vs !==
console.log( ` this statement is ${num3!=num4}`)
console.log( ` this statement is ${num3!==num4}`)

// convert number to string (22 -> "22")
let numberr = 22;
numberr = numberr + "";
console.log(typeof numberr);

//convert string to number.
let myStr = +"34";
console.log(typeof myStr);


//truthy and falsy values

//falsy values

// false
// ""
// null
// undefined
// 0


//truthy values
// "abc"
// 1, -1

//ternary operator / conditional operator

let age = 9;
let drink = age>=5 ? "coffee" : "milk";
console.log(drink);

//reference type
//  array is the object in javascript
//ordered collection of items

let fruits = ["apple", "mango" , "grapes"];
let obj = {}; // object literal

console.log(fruits);
fruits[2] ="orange";
console.log(fruits);

console.log(typeof fruits); //output - object
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));// obj is not an array so output would be false


// array method:-
// push method is used to insert the element at the end of array;
fruits.push(45);
console.log(fruits);

//pop method is used to delete an element at the end of the array;
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruit is", poppedFruit);


// unshift method is used to insert an element at the starting of the array;
fruits.unshift("banana");
fruits.unshift("kiwi");
console.log(fruits);

// shift method is used to remove an element at the starting of an array
let removedFruit = fruits.shift();
console.log(fruits);
console.log("Removed fruits is" , removedFruit);

// **important Note :- push and pop operations are faster than shift and unshift

//primitive vs Reference data types
//In primitive data types
let numb1 = 6;
let numb2 = numb1;
console.log("value is numb1 is ", numb1);
console.log("value is numb2 is ", numb2);
numb1++;
console.log('after incrementing numb1 ');
console.log("value is numb1 is ", numb1);
console.log("value is numb2 is ", numb2);

//In reference data types
//array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("after pushing element to array 1")
console.log("array1",array1);
console.log("array2",array2);
//In reference data type , both arrays refer same memory location in heap so it means every change will reflect in both arrays

//In primitive data type , different memory location is allocated for different variable so no change will reflect in variables.
  

//how to clone array 

let arr1 = ["item1", "item2"];
// let arr2 = ["item1", "item2"] (method 1)
// let arr2 = arr1.slice(0);     (method 2 fastest way)
// let arr2 = [].concat(arr1);   (method 3)
// let arr2 = [...arr1];         (method 4 using spread operator)

// let arr2 = arr1.slice(0).concat(["item3","item4"]);
// let arr2 = [...arr1,"item3","item4"];
let OnemoreArray = ["item3","item4"];
let arr2 = [...arr1, ...OnemoreArray];
arr1.push("item3");
console.log(arr1===arr2);
console.log(arr1);
console.log(arr2);

//for loop in array

let fruit= ["apple", "mango" , "grapes", "banana"];
for(let i=0; i<fruit.length;i++){
    console.log(fruit[i].toUpperCase());
}

let fruit2 = [];
for(let i=0 ; i <fruit.length;i++){
    fruit2.push(fruit[i].toUpperCase());
}
 console.log(fruit);
 console.log(fruit2);


 // use const for creating array 

 //heap memory ["apple", "banana" ] 0x11

 const fruits3 = ["apple", "banana" ]; //0x11
// fruits3=[]; //not allowed 
fruits3.push("mango");
console.log(fruits3);

