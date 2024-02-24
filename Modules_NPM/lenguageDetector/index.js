const franc = require("franc")
const lang = require("langs");
const cowsay = require("cowsay");


const input = process.argv[2];
const langCode = franc(input) //This will return the lenguage code.
// console.log(process.argv)

// console.log(lang.all())

// console.log(langCode)


if ( langCode === "und"){
    console.log("The lenguage is not in the data base")
} else {
    const lenguage = lang.where(3, langCode)
    if(lenguage){
        console.log(cowsay.say({text: `The lenguage is ${lenguage.name}`}))
    } else {
        console.log("No lenguage detected")
    }
}