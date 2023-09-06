// fill method 
// value , start , end
//it modifies original array ;

const myArray = new Array(10).fill(0);
console.log(myArray);
            //    0 1 2 3 4 5 6 7 -->indices
const myArray1 = [1,2,3,4,5,6,7,8];
myArray1.fill(0,2,5);
console.log(myArray1)
// 5-2 = 3 elements would be filled with 0s.
// starting index --> 2
//ending index -->5 (5th index not included)


//-----------------------------------------------------------//
//slice method
// start , delete , insert
//(starting index, no. of items will be deleted, inserting items)
//it modifies the original array

const myArray2 = ["item1", 'item2','item3'];

//delete
// myArray2.splice(1,1);
const deleted_items = myArray2.splice(1,1);//returns array of deleted items.
console.log(myArray2);
console.log("deleted item is ", deleted_items);

//insert
//myArray2.splice(2,0,"inserted_item");
const inserted_items = myArray2.splice(2,0,"inserted_item");
console.log(myArray2);

// insert and delete
const deletedItems = myArray2.splice(1, 2, "inserted item1", "inserted items2");
console.log(`deleted items are ${deletedItems}`);
console.log(myArray2);

