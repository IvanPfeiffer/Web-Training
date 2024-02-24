//If Statement 

// if (1+1===2){
//     console.log("Math is REAL!")
// }

// const password = prompt("Please enter a new password: ")

// if (password.length >= 6){
//     if (password.indexOf(" ") === -1){
//         console.log("VALID PASSWORD!")
//     } else {
//         console.log("INVALID PASSWORD! It has a space")
//     }
// } else {
//     console.log("INVALID PASSWORD! Less than 6 characters")
// }

// Switch Statement
const day = 2;
switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("There is no case for this!")
}