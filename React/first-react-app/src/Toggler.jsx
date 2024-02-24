import { useState } from "react"
import './Toggler.css'

export default function Toggler(){
    const [face, setFace] = useState(true)
    const handleFace = () =>{
        setFace(!face)
    }

  return (
  <div className="Toggler">
    <p>Yo cuando te veo</p>
    <p onClick={handleFace}>{face ? '😀': '😍'}</p>
  </div>
  )
}