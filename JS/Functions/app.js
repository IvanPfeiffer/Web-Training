function capitalize(word){
    let first = word[0].toUpperCase();
    let remaining = word.splice(0,1)
    return first + remaining
    
}

function callTwice(func){
    func()
    func()
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
}

callTwice(rollDie) //IT SHOULD NOT HAVE () WHEN GIVING IT AS A PARAMETER. 

function makeMysteryFunc(){
    const rand = Math.random()
    if (rand > 0.5) {
        return function(){
            console.log("Congrats!!!")
        } 
    } else {
        return function(){
            alert("You are dead!")
        }
    }
}

function makeBetweenFunc(min, max){
    function isBetween(n){
        return n >= min && n<=max
    }
}

// function isBetween(n){
//     return n >= 50 && n<=100
// }