export default function Slots({values}){
    const rand1 = Math.floor(Math.random()*values.length)
    const rand2 = Math.floor(Math.random()*values.length)
    const rand3 = Math.floor(Math.random()*values.length)
    const result = [values[rand1], values[rand2], values[rand3]]
    const isWinner = rand1 === rand2 && rand2 === rand3;

    return (
        <div>
            <h1>{result}</h1>
            <h2 style={{color: isWinner ? 'green': 'red'}}>{isWinner ? 'You Win!':'You Lose :('}</h2>
            {isWinner && <h3>Congrats</h3>}
        </div>
    )

}