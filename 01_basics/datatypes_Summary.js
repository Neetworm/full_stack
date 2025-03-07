// Primitive

// const id= Symbol('123')
// const anotherId= Symbol('123')

// console.log(id==anotherId);

// const bigNUmber= 454643136312n
// console.log(typeof bigNUmber)

// const  outsideTemp= null
// console.log(typeof(outsideTemp)) // object
// 7 types: String, Number, BigInt, Boolearn , null , undefined, Symbol 

//staticallly or dynamically typed?? ->js

// Referances (non-primitive)
// arrays, objects, functions.

// const cities= ["bengluru", "lko","jaipur"]
// console.log(typeof cities)

// const myfunction= function(){
//     console.log("hello world")
// }
// console.log(typeof myfunction)

// let myobj= {
//     name: "gasan",
//     age: 22,
// }

// #interview asked.
// typeOf : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)


// let myYoutubename = "Harijan_Rathod"
// let anothername= myYoutubename // copy of myYoutubename is assigned to anothername.
// anothername= "Gagan_Rathod"
// console.log(myYoutubename)
// console.log(anothername)

let userOne= {
    name: "Amazon",
    type: "product_based",
}

let userTwo = userOne; // reference of userOne is assigned to useTwo .
userTwo.name= "Infosys"
userTwo.type= "service_based"

console.log(userOne.name)
console.log(userTwo.name)