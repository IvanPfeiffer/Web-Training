import { useState } from "react"
import './Toggler.css'

export default function ToggleCounter(){
    const [face, setFace] = useState(true)
    const [count, setCount] = useState(0)
    const handleFace = () =>{
        setFace(!face)
    }
    const handleCount = () =>{
        setCount(count + 2)
    }
  return (
  <div className="Toggler">
 
    <p onClick={handleFace}>{face ? '😀': '😍'}</p>
    <p onClick={handleCount}>Count: {count}</p>
    
  </div>
  )
}