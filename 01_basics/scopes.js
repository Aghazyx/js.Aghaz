// let a = 10 
// var b = 20 
// const c = 30 

// console.log(a)
// console.log(b)
// console.log(c)


// let a = 300 //this is a global scope 
// if ( true){//this is a local scope or block scope  where global scope can also be accesed but local scope cant be accesed at global scope 
//     let a = 20
//     const b = 30 
//     console.log("Innner a : " , a)
//     // var c = 40 
// }
// console.log(a)

// function one(){
//     const username = "Aghaz"
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one() // you neeed to call one in oder to excecute function two , child can access parent scope but parent cant access child scope.


// if(true){
//     const username = "Aghaz"
//     if(username === "Aghaz"){
//         const website = "youtube"
//         console.log(username + "." + website)
//     }
//     // console.log(website)
// }
// // console.log(username)

// ++++++++++++interesting+++++++++++++

function addone(num){
    return num + 1 
}
console.log(addone(5))


// console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))