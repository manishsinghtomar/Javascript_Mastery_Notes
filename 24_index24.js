//clone using Object.assign 

//memory
const obj ={
    key1: "value1",
    key2: "value2",
}

// const obj2 = obj;//here both objects are pointing to same memory
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);//change in one object will reflect in another

//cloning
// const obj2 ={...obj};
const obj2 = Object.assign({},obj); //another way of cloning
obj.key3 = "value3";
console.log(obj);
console.log(obj2);
