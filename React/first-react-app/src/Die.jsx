export default function Die({numSides= 6}){
    const roll = Math.floor(Math.random()*numSides)+1
    return <p>{numSides} - Die Roll: {roll}</p>
}