import { useState } from "react"
import './ColorBox.css'


export default function ColorBox(colors){
const [color, setColor] = useState(randomColor(colors.colors))

function randomColor(colors) {
    const randIndex = Math.floor(Math.random()*colors.colors.length) + 1;
    const randColor =  colors.colors[randIndex];

    return randColor
}

function handleColorChange(){
    const randColor = randomColor(colors.colors);
    console.log(randColor)
    setColor(randColor)
}


  return (
  <div className="ColorBox" onClick={handleColorChange} style={{backgroundColor: color}}>
    
  </div>
  )
}

