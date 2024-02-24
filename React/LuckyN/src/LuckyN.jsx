import { useState } from "react"
import {getRolls} from './utils.js'
import Dice from "./Dice.jsx";
import Button from "./Button.jsx";

export default function LuckyN({numDice=2, goal=7, win, nameOfGame}){
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner =  win(dice, goal);

    const roll = () => setDice(getRolls(numDice))
  return (
  <main className="LuckyN">
    <h1>{nameOfGame}{goal} {isWinner && 'Winner!'}</h1>
    <Dice dice={dice}/>
    <Button handleOnClick={roll} text={'Roll Again!'}/>
  </main>
  )
}