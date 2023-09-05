//spread operator
const array1 = [1,3,4];
const array2 = [5,8,7];

//const newArray = [...array1, ...array2,45,65];
const newArray = [..."manish"];
console.log(newArray);


//spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
};

const obj2 = {
    key1: "value3",
    key3: "value5",
    key2: "value4",
};

const newObject = {...obj1, ...obj2 ,key5: 'value8'};
console.log(newObject);

//const newObject = { ...obj2, ...obj1 , key69: "value"}
const newObject1 = { ..."abc" };
console.log(newObject1);

const newObject2 = { ...["item1" , "item2"] };
console.log(newObject2);