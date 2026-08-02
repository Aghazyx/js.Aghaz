//for of loop
// const arr=[1,2,3,4,5,6,7,8,9,10]
// for (const num of arr) {
//     console.log(`Number is ${num}`);
// }

//MAPS

const map = new Map(); 
//In JavaScript, Map is a built-in data structure that stores key-value pairs.
//  It is similar to an object, but it is more flexible and powerful.
map.set("in", "India");
map.set("sp", "Spain");
map.set("fr", "France");
map.set("us", "United States");
map.set("uk", "United Kingdom");
// console.log(map);


for (const [key,value] of map) {
    console.log(key,'=>',value);
}
  
