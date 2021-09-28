//3rd folder

// const getNotes = function (){
//     return 'my notes...'

// }

// module.exports = getNotes 

//4th folder 
const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    console.log(duplicateNote)
    console.log(title)


    debugger 

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }else{
        console.log(chalk.red.inverse('Note title taken..!!'))
    }
}

// const removeNote = (title) => {
//     const notes = loadNote()
//     const notes
// }