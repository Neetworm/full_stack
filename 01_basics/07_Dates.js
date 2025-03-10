// For more operations and definition , you can refer to mdn docs.

let mycreateDate = new Date("2023-01-14")
// console.log(mycreateDate)
// console.log(mycreateDate.toString())
// console.log(mycreateDate.toLocaleString())


// //to compare date with time.
// let myTimeStamp= Date.now()
// console.log(myTimeStamp)
// console.log(mycreateDate.getTime()) //in milliseconds

// in Interview: how to convert this mycreateDate to seconds.

// console.log(Math.floor(mycreateDate.getTime()/1000))

let newDate= new Date()
// console.log(newDate)
// console.log(newDate.getDay())
// console.log(newDate.getMonth())

// `${newDate.getMonth()} , and the date is ${newDate.getDate()}`  // This is how to print message.

// customizing toLocaleString()
console.log(newDate.toLocaleString())
console.log(newDate.toLocaleString('en-US', {
    year: "numeric",
    month: "long",
    day: "2-digit",
    weekday: "short"
}));
