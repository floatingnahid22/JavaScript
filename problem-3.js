
const array = [3, 2, 1]
const newElement = 4

const addingArray = [newElement].concat(array) 
console.log(addingArray);

const [removed,...removingArray] = array
console.log(removingArray)