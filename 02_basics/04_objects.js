// const user1= new Object() // singleton way.

const user2 = {} // literals
user2.id= "124abc"
user2.name="sam"
user2.isLoggedIn= "false"
// console.log(user2)

// //-------------------------------------object : nesting---------------------------------------------------------
// const regularUser= {
//     email : "some@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname: "sam",
//             secondname: "sulek",
//             nickname: "muscleDemon"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser["fullname"]["userfullname"]["firstname"]) 
// console.log(regularUser?.fullname?.userfullname?.firstname) //optinal chaining.


//----------------------------------------merging objects------------------------------------------------------------------
// const obj1= {1: "a",2: "b"}
// const obj2= {3: "a",4: "b"}
// const obj3= {5: "a",6: "b"}

// // const obj4= {obj1,obj2,obj3} 
// // const obj4= Object.assign({},obj1,obj2,obj3)
// const obj4 ={...obj1,...obj2,...obj3} // mostly used.
// console.log(obj4)

//----------------array of objects--------------------
const users= [
    {
        id: "1",
        name: "himesh"
    },
    {
        id:"2",
        name:"sundar"
    },
    {
        id:"3",
        name: "gagan"
    }
]
// console.log(users[2].name)

// ******************************************converting key/values to array **********************************************
// console.log(Object.keys(user2))
// console.log(Object.values(user2))
// console.log(Object.entries(user2))

// console.log(user2.hasOwnProperty('isLoggedIn'))
// console.log(user2.hasOwnProperty('isLogged'))

//************************************************(destructuring of objects, will be used in react)*************************************
const course= {
    coursename: "ai/ml",
    duration: "10 months",
}

// const {duration} = course 
const {duration: d} = course

console.log(d)
 

//random api generator
//json formatter for understanding api
