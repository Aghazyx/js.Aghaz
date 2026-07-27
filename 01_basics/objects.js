//singleton
//object.create
//object lieterals 

const mySym = Symbol("Key1")

const jsUser = {
    name: "Aghaz",
    [mySym]: "Value1",  
    age: 20,
    email: "john@example.com",
    favouriteColor: "Red"
}
// console.log(jsUser);


// console.log(jsUser.name);
// console.log(jsUser.age);
// console.log(jsUser.email);
// console.log(jsUser.favouriteColor);


// console.log(jsUser["name"])
// console.log(jsUser["age"])
// console.log(jsUser["email"])
// console.log(jsUser["favouriteColor"])

// console.log(typeof jsUser[mySym])


// jsUser.age = 21 
// console.log(jsUser)
// jsUser.name = "NAMAMI"
// jsUser.age = 19 
// console.log(jsUser)
// console.log(typeof jsUser)

jsUser.greeting = function(){
    console.log("hellow coders")
}
console.log(jsUser.greeting())

