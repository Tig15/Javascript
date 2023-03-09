// The splice method is use for both adding element and removing by index number.
// How to write splicing values : arr.splice(position, no of items remove, new element1,new element2,......)
const elect = ["Computer", "Keyboard", "Mouse", "CPU"]
elect.splice(2, 0, "Printer", "Speaker")
console.log(elect) // The way of adding.

const tech = ["Phone", "Earbud", "Laptop", "Tablet", "iPad"]
tech.splice(2, 1)
console.log(tech)

// The slice() method just creates a new array out of existing array. It doesn't remove, just slice the items from the existing and make its own.
const library = [40,50,45,33,33,"Thriller","Action","Adventure","Sci-fi","Paranormal"]

const books = library.slice(0,5) // The first index is including but it is excluding the last index.
console.log(books)

const genre = library.slice(5,10)
console.log(genre)

// The sort() method sort an array in order.

const marks = [40,44,33,65,72, 18,25,36,25,75,97,24,82]
marks.sort()
console.log(marks)

marks.reverse() // The reverse() method reverse an array in order.
console.log(marks)

let pos = marks.indexOf(33) // indexOf() method get you where your item position is lying or at what index.
console.log(pos)

let check = marks.includes(25) // includes() method checks whether the item is present in array or not.
console.log(check)


// Let's look at the fill() method - It fills the elements in an array with a static value and returns the modified array.

const aspect = new Array(5)
console.log(aspect)

aspect.fill("moon","sky")
console.log(aspect)