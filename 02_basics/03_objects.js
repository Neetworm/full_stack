// 2 ways: object literals, sigleton
//--------------------------------------------object literals---------------------------------------------------------------

// const JsUser= {
//     name: "sam",
//     "full name": "sam sulek",
//     profession: "body builing",
//     age: 23,
//     nationality: "American",
// }

//-------------------------------------------------------- interview asked ---------------------------------------------------
//-------- keys : are string actually -----------------
// take a symbol and use it as key in an object and print it.

const mySym= Symbol("key1")
const JsUser2= {
    // mySym : "mykey1", //not correct way , we are still not using it as symbol
    [mySym]: "mykey1",
    name: "sam",
    "full name": "sam sulek",// keys are actually treated as string . So you can define key as string directly too.
    profession: "body builing",
    age: 23,
    nationality: "American",
    email: "samsulek@google.com"
}
// console.log(JsUser2.age)
// console.log(JsUser2["full name"])
// console.log(typeof JsUser2.mySym)
// console.log(typeof JsUser2[mySym])
// console.log(JsUser2[mySym])

// -------------------------------------------------interesting--------------------------------------------------------------------------------
// console.log(JsUser2) // diff b/w [mySym] and mySym output.

// JsUser2.email= "samsulek@microsoft.com"
// Object.freeze(JsUser2)
// JsUser2.email= "samsulek@google.com" // not change now (since freezed)
// console.log(JsUser2)


//-------------------------------------------------adding function to object------------------------------------------------------------------
JsUser2.greeting= function(){
    console.log("Hello js user")
}

JsUser2.greetingTwo= function(){
    console.log(`Hello js user ${JsUser2.name}`)
}

console.log(JsUser2.greeting())
console.log(JsUser2.greetingTwo())