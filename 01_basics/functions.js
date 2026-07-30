// console.log("hellow everyone , this file is created to learn funtions from java script for my devlopment journey")

// function sayMyName(){
//     console.log("A")
//     console.log("g")
//     console.log("h")
//     console.log("a")
//     console.log("z")
// }
// sayMyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(2,3)

// function addTwoNumbers(number1 , number2){
//    let result = number1 + number2 
//    console.log("Aghaz") // anything before the return result prints inside the function 
//    return result
//    console.log("this wont print since it is after the returnresult")
// }
// const result = addTwoNumbers(2,3)
// console.log("result :",result)

// function loginUserMessage(username) {
//     if(username === undefined){
//           console.log("please enter a username");
//           return
//     }
//     else {
//              return `${username} just logged in`
//     }
// }
// console.log(loginUserMessage("Aghaz"))
// console.log(loginUserMessage())

// function calculateCartPrice(...num1)//the tripple dots are important to store ll values of num1 in the form of array 
// {
//    return num1
// }
// console.log(calculateCartPrice(500,600,700))

// const user = { 
//     usernme : "Aghaz",
//     salary : 200000
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and salary is ${anyobject.salary}`);
 
// }
// handleObject({
//     username:"NAMAMI",
//     salary:20000000
// })

// const newArray = [100,200,300,400,500,600,700]
// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(newArray));
// console.log(returnSecondValue([1,2,3,4,5,6,7,8,9,10]));


// +++++++++++++++ Arrow function ++++++++++++++
// const user = { 
//     username : "Hitesh",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.username} , wellcome to the website`);
//         console.log(this)
//     }
// }
// user.welcomeMessage()
// user.username = "Aghaz"
// user.welcomeMessage()

// console.log(this) this doesnt have access to local scope 


// function chai(){
//     console.log(this);
// }
// chai()


// const chai = () => {
//     let username = "Aghaz"
//     console.log(this.username);
//     console.log(this)
// }
// chai()

// () => {} this is the asyntax of arrow function 

// const addTwo = ( num1 , num2) => {
//     return num1 + num2
// }

// using return keyword is explicit and not using return that is in arrow function is implicit return
// const addTwo = ( num1 , num2) =>  num1 + num2
// console.log(addTwo(8,9))

// IMMEDIETLY INVOKED FUNCTION EXPRESSION (IIFE)

// (function chai(){
//     console.log("DB CONNECTED");
// })()
