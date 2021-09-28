//module system-2nd video
//const fs = require('fs')
//fs.writeFileSync('notes.txt','My name is Nahid')
//fs.appendFileSync('notes.txt',' I live in Dhaka')

//3rd video 
// const add = require ('./utils.js')
// const sum = add(4 ,-2)
// console.log(sum)

//4th video 
//const validator = require('validator')
//const getNotes = require('./notes.js')
//const msg = getNotes()
//console.log(msg)
//console.log(validator.isEmail('17201022@uap-bd.edu'))

//5th video  

// const chalk = require('chalk')
// const getNotes = require('./notes.js')
// const msg = getNotes()
// console.log(msg)
// const blueMsg = chalk.blue.inverse.bold('Success..!!')
// console.log(blueMsg)


//6th video 
const chalk = require ('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

const blueMsg = chalk.blue.inverse.bold('Success..!!')
console.log(blueMsg)