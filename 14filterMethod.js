//the filter() method is used to create a new array by filtering out elements from an existing array that do not meet a specified condition.

// Syntax - array.filter(callback, [thisArg])

// Example-1: Filtering Objects Based on a property values
const clroom =[
    {name:"Aman", age:18, scores:87},
    {name:"Torto",age:20, scores:57},
    {name:"Ayush",age:21, scores:78},
    {name:"Bharat",age:22, scores:65},
    {name:"Suraj",age:17, scores:73},
    {name:"Aman", age:18, scores:78},
    {name:"Torto",age:20, scores:75},
    {name:"Ayush",age:21, scores:53},
    {name:"Bharat",age:22, scores:56},
    {name:"Suraj",age:17, scores:37}
]

const scorers = clroom.filter(clroom => clroom.scores < 60)
console.log(scorers)