// "use strict" ; //treats all js code as newer version of code 

// alert("Hello World") // we are using node js and not browser

 //code readability should be high 

// console.log("Hello World") 
// let name = " Aghaz "
// let age = 18
// let isLoggedIn = false

//number => 2 to power 53
// bigint
//string
//boolean => true/false
//null => standalone value 
//undefined => value not assigned
//symbol => unique and immutable value,will mostly use while learning react 

//object 

// console.log(typeof name) //string
// console.log(typeof age) //number
// console.log(typeof isLoggedIn) //boolean
// console.log(typeof null) //object
// console.log(typeof undefined) //undefined
// console.log(typeof Symbol()) //symbol
// console.log(typeof {}) //object
// console.log(typeof []) //object

//the typeof syntax gives us the type of the variable we have discussed 

// console.log("bye bye")

//primitive datatypes 
// 7 catagories ; number, bigint, string, boolean, null, undefined, symbol

//reference type also known as non primitive 

// arrays , objects , functions
 
const heroes =  [ "thor", "spiderman","iron man"]
console.log(heroes);
let myObj = {
    name: "Aghaz",
    age: 20,
    isLoggedIn: false
}
console.log(myObj);

const myFunction = function(){
    console.log("Hello World");
}
console.log(myFunction);