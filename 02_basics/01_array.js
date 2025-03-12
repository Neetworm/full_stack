let myArr= [1,2,3,4,5]
console.log(myArr.push(6))
console.log(myArr.pop())
// const newArr= myArr.join()
// console.log(myArr)
// console.log(typeof newArr)

// ------------------------------ shift/unshift ---------------------

//-------------------------------- slice/splice -----------------------------------
// imp: interview asked. 

const myn1= myArr.slice(1,3) //range(3 here) not included and no changes in original array.
console.log("A", myArr)
console.log(myn1)

const myn2= myArr.splice(1,3)// range included and original array modified.
console.log("B",myArr)
console.log(myn2)