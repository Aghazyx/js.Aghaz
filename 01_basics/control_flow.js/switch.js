// switch(key){
//     case value1:
//          code to be executed if key === value1
//         break;
//     case value2:
//          code to be executed if key === value2
//         break;
//     default:
//          code to be executed if key !== value1 && key !== value2
//          break;
// }

// const month = 3;
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     default:
//         console.log("Invalid month");
//         break;
// }

//false values : false, 0, "", null, undefined, NaN, BigInt(0)
//true values : true, 1, "non-empty string", {}, [],function(){}    


// const userEmail = "user@example.com";
// const userName = "John Doe";
// const userAge = 30;
// if(userEmail.length > 0){
//     console.log("User email is valid");
// } else {
//     console.log("please enter a valid email");
// }

// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Empty object");
// } else {
//     console.log("Non-empty object");
// }

//nullish coalescing operator (??) : null undefined 

// let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10;
// console.log(val1); // Output: 10

//ternary operator : condition ? expressionIfTrue : expressionIfFalse

// const iceTeaPrice = 85;
// iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80");