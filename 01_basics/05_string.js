
// READ MDN : for strings function (15min. reading)

//--------------------------------------------------------------------------------------------------------
const name= "google"
const repoCount= 13
// //old way
// console.log(name+ repoCount+ " Value")

// console.log(`Hello website name is ${name} and my repoCount id  ${repoCount}`);

// const gameName= new String("Counter_Strike")
// // String object -> memory allocated in heap(less used.)
// // It seems like an array ,  but it is actually string object with key:value pairs  .
// // 0: "C"
// // 1: "o"
// // 2: "u"
// // 3: "n"
// // 4: "t"
// // 5: "e" .....

//-------------------------------------------------------------------------------------------
// Some common functions for string.

// slice()
// substring()
const newStringOne= "   Gooogle    "
console.log(newStringOne)
console.log(newStringOne.trim())

//url
const url= "https://gooogle.com/amazon%20homepage" //space mistyped by user is converted to %20(or something else) by default
console.log(url.replace('%20','-'))
console.log(url.includes("google")) //yes/no
