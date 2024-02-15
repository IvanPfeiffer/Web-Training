import { useState } from "react"
import Button from './Button'
import Box from "./Box"

export default function BoxGrid({numBoxes}){

    const [boxes, setBoxes] = useState(new Array(numBoxes).fill(false))
    

    const resetColor = () =>{
        setBoxes(new Array(numBoxes).fill(false))
    }

    const toggleBox = (idx) => {
        setBoxes(oldBoxes => {
            return oldBoxes.map((value, i)=>{
                if(i === idx){
                    return !value
                } else {
                    return value
                }
            })
            
        })
    }
  return (
  <div>
      {boxes.map((b, i)=> <Box key={i} isActive={b} toggle={()=> toggleBox(i)}/>)}
      <Button text={"Reset"} handleOnClick={resetColor}/>
  </div>
  )
}