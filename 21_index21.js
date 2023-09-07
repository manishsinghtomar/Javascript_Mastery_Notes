// iterables
//jispe hum for of loop laga sakein
// string , array are iterable 

const firstName = "Manish";
for(let char of firstName){
    console.log(char);
}

const items = ["item1", "item2",'item3'];
for(let item of items){
    console.log(item);
}







//array like object 
// jinke pas length property hoti hai 
//aur jinko hum index se access kar sakte hai 
//example :- string

const firstName1 = "Manish";
console.log(firstName1.length);
console.log(firstName1[2]);