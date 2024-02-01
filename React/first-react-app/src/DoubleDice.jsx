// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random()*3)+1
//     const num2 = Math.floor(Math.random()*3)+1
//     // const result = num1 === num2 ? 'You win!' : 'You lost'

//     return (
//         <div>
//             <h2>{num1 === num2 ? 'You win!' : 'You lost'}</h2>
//             <p>Num 1: {num1}</p>
//             <p>Num 2: {num2}</p>
//         </div>
//     )
// }

export default function DoubleDice(){
    const num1 = Math.floor(Math.random()*3)+1
    const num2 = Math.floor(Math.random()*3)+1
    // const result = num1 === num2 ? 'You win!' : 'You lost'
    const styles = {color: num1 === num2 ? "green" : "red"};

    return (
        <div className = "DoubleDice" style={styles}>
            <h2>DoubleDice</h2>
            {num1 === num2 ? <h3>You win!</h3> : null}
            <p>Num 1: {num1}</p>
            <p>Num 2: {num2}</p>
        </div>
    )
}