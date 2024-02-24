const maxNum = parseInt(prompt("Enter a max number: "));
const random = Math.floor(Math.random() * maxNum);

let nTry = parseInt(prompt("Enter your first guess: "));
let guesses = 1;
while(nTry !== random){
    if(random > nTry){
        nTry = parseInt(prompt("Too Low! Try again: "))
    } else if(random < nTry){
        nTry = parseInt(prompt("Too High! Try again: ")) 
    }
    guesses +=1
}
console.log("You did it!")
console.log(`It took you ${guesses} tries!`)