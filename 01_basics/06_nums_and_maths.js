// const num1 = 400; // Primitive
// const num2 = new Number(400); // Object

// console.log(typeof num1); // "number"
// console.log(typeof num2); // "object"

// console.log(num1 === 400); // true
// console.log(num2 === 400); // false (object vs primitive)

// console.log(num1.toString())
// console.log(num2.toFixed(2))//upto some precision.


// const otherNumber= 123.4567
// console.log(otherNumber.toPrecision(2))

// const hundreds = 1000000
// console.log(hundreds.toLocaleString())//us standard.
// console.log(hundreds.toLocaleString('en-IN'))

// ++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.555))
// console.log(Math.ceil(2.5779))
// console.log(Math.floor(86.5559))

// frequent use of Math is to generate random numbers , sometimes in range.

console.log(Math.random())
console.log(Math.floor((Math.random()*10)+1))// +1 : ensuring generated number>1
const min= 10
const max= 20

console.log(Math.floor((Math.random()*(max-min+1)+min)))