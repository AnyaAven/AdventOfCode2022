const fs = require('fs')

function readLinesFromTxt(txtFilePath) {
    const txt = fs.readFileSync(txtFilePath)
    const txtToString = txt.toString()
    return txtToString.split('\n')
} //reading a text file
const puzzInputTxtFilePath = "./day1Input.txt"
const puzzInput = readLinesFromTxt(puzzInputTxtFilePath)

console.log(puzzInput)

