//while loop in array 
const fruitts = ["apple" , "mango", "grapes"];
const newFruitts=[];
let i = 0;
while(i<fruitts.length){
    newFruitts.push(fruitts[i].toUpperCase());
    i++;
}
console.log(newFruitts);

//for of loop in array
const fruiits =["jackfruit" , "mango", "grapes"];
const fruiits2=[];
for(let fruits of fruiits){
    fruiits2.push(fruits.toUpperCase());
}
console.log(fruiits2)




