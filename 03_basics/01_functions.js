// function sayMyName(){
//     console.log("J")
//     console.log("O")
//     console.log("H")
//     console.log("N")
// }
// sayMyName()

function addTwoNumbers(num1,num2){
    console.log(num1+num2)
    // return num1+num2
}

// console.log(addTwoNumbers(2,3))
// addTwoNumbers(2,45)
// addTwoNumbers(3,"a")

function loginUserName(UserName){
    if(!UserName){
        console.log("Please enter username")
        return 
    }
    return `${UserName} just logged in`
}

// console.log(loginUserName("sam sulek"))
// console.log(loginUserName())


//-------------------------------------------passing unknown number of variables-----------------------------------------------
function calculatePrice(...num1){ //using rest operator (...) 
    console.log(num1)
}

// calculatePrice(2000,10033,234)

//--------------------------------------------passing objects to function-------------------------------------------------------
const user= {
    username: "sam",
    fullname: "sam sulek",
    profession: "body building"
}

// function userDetails(anyobj){
//     return `${anyobj.username} has profession ${anyobj.profession}`
// }

// console.log(userDetails(user))

//direct passing.
function userDetails(anyobj){
    console.log(`${anyobj.title} has profession ${anyobj.price}`)
}
userDetails({
    title: "js tutorial",
    price: "1300"
})
//-------------------------------------------------passing array------------------------------------------------


