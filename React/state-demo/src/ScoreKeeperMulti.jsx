/* eslint-disable react/prop-types */

import { useState } from "react"


export default function ScoreKeeperMulti({numPlayers, target}){
    const playersArray =  new Array(numPlayers).fill(0);
   

    const [scores,setScores] =useState(playersArray)
    const [isWinner, setIsWinner] = useState(false)
    const incrementScore = (index) =>{
        setScores(prevScores => {

            return prevScores.map((s, i)=>{
                if(i===index){
                    if(s+1 === target) setIsWinner(true)
                    return s + 1
                } else {
                    return s
                }
            })
        })
    }

   const resetScores = () => {
    setScores(playersArray)
    setIsWinner(false)
   }

  


    return (
        <div>
            <ul>
            {scores.map((playerScore, i) => {
                return (
                <li key={i}>
                    <p style={{display: 'inline-block'}} >Player {i+1}: {playerScore}</p>
                    {playerScore >= target ? 'Winner!' : ''}
                    <button  disabled={isWinner} onClick={()=> incrementScore(i)}>+1</button>

                </li>
                ) 
            })}
            </ul>

            <button onClick={resetScores}>Reset Scores</button>
        </div>
        )
  
}


  
