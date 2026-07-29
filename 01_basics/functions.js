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

function loginUserMessage(username) {
    if(username === undefined){
          console.log("please enter a username");
          return
    }
    else {
             return `${username} just logged in`
    }
}
console.log(loginUserMessage("Aghaz"))
console.log(loginUserMessage())