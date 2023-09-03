//callback function:A callback is a function passed as an argument to another function

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there i am a func and i can..");
    callback("manish");
}

myFunc(myFunc2);

//---------------------------------------------------------//

//function returning function 

function myFunction(){
     function hello(){
        return "hello world"
     }
     return hello;
}

const ans = myFunction();
console.log(ans());
// here , returned hello function will  store in ans variable and then ans variable become function whenever we will call ans(), hello function will be invoked automatically  



//Whenever a function accepts another function as an input or return function, or in both cases, that function becomes a high-order function.


//ex-2: Direct function return 

function myFun(){
    return function(){
        return "hello manish";
    };
}

const answ = myFun();
console.log(answ());



