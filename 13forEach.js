// The forEach() method calls a function for each element in an array.

// Syntax:  array.forEach(function(element, index, arr))

//Example-1 : Summing the elements of an array

const marks = [20, 38, 38, 33, 14, 14, 35, 53, 14, 36]

marks.forEach((score, index) => {
    marks[index] += 10
})

// function correction(score, index, marks){
//     marks[index] = score + 10
// }
console.log(marks)


// Example-2: Creating a new array from an existing array

const elem = [12, 34, 25, 13, 54]
const drag = []  // An Empty Array

elem.forEach((change) => {
    drag.push(change * change)
})

console.log(drag)

// Example-3: Creating a new array from an existing array
const spent = [4000, 4565, 1414, 6142]
let total = []

spent.forEach((incree) => {
    total.push(incree * 10)
})

console.log(total)

// Example-4:Iterating over an array of objects

let classes = [
    { name: "Aman", age: 21 },
    { name: "Torto", age: 20 },
    { name: "Tig", age: 19 },
    { name: "Rach", age: 21 }
]

classes.forEach((student) => {
    console.log(student.name + " is " + student.age + "years old ")
})

// Example-5: Filtering an Array
let numbers = [2, 31, 33, 35, 51, 53, 36, 52, 62, 14]
let oddNumbers = []
let evenNumbers = []

numbers.forEach((number) => {
    if (number % 2 == 0) {
        evenNumbers.push(number)
    }
    else {
        oddNumbers.push(number)
    }
})

console.log(evenNumbers)
console.log(oddNumbers)

// Example-6: Iterating over a nested array
let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10]
]

mat.forEach((row) => {
    row.forEach((column) => {
        console.log(column * 20)
    })
})


let mult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

mult.forEach(((table) => {
    console.log(table * 10)
}))

