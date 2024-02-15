import { useState } from "react"

export default function Dumbo(){

  function generateGameBoard(){
    console.log('Making the initial gameboard')
    return Array(500)
  }

  const [board, setBoard] = useState(generateGameBoard)
  return (
    <div>
        <button onClick={()=>setBoard('Hello')}>Click me to change State!</button>
        <p>The new state is {board}</p>
  </div>
  )
}